import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { DayPickerRangeController, isInclusivelyAfterDay } from 'react-dates';
import { START_DATE, END_DATE } from 'react-dates/constants';

import {
  Col,
} from 'react-bootstrap';
import cx from 'classnames';

// Style
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './AvailabilityCalendar.css';
import S from '!isomorphic-style-loader!css-loader!sass-loader!react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

// Redux
import { connect } from 'react-redux';
import { change, formValueSelector } from 'redux-form';

// Translation
import { FormattedMessage, injectIntl } from 'react-intl';

// Locale
import messages from '../../../locale/messages';

// Redux Actions
import { checkAvailability } from '../../../actions/checkAvailability';
import { getSpecialPricingData } from '../../../actions/Listing/getSpecialPricingData';

import CustomizableCalendarDay from './CustomizableCalendarDay';
import Loader from '../../../components/Loader';

// Local
import { isRTL } from '../../../helpers/formatLocale';
import { getDateUsingTimeZone } from '../../../helpers/dateRange';
import CustomDayContents from "./CustomDayContents";
class AvailabilityCalendar extends React.Component {
  static propTypes = {
    listId: PropTypes.number.isRequired,
    smallDevice: PropTypes.bool,
    verySmallDevice: PropTypes.bool,
    country: PropTypes.string
  };

  static defaultProps = {
    listId: null,
    maxDaysNotice: 'unavailable',
    autoFocusEndDate: false,
    showInputs: false,
    keepOpenOnDateSelect: false,
    initialVisibleMonth: null,
    hideKeyboardShortcutsPanel: true,
    noBorder: true,
    startDateOffset: undefined,
    endDateOffset: undefined,
    renderCalendarDay: undefined,
    renderDayContents: null,
    minimumNights: 1,
    smallDevice: false,
    verySmallDevice: false,
    formName: 'BookingForm',
    formStartDate: null,
    formEndDate: null,
    country: ''
  }

  constructor(props) {
    super(props);
    this.state = {
      focusedInput: props.autoFocusEndDate ? END_DATE : START_DATE,
      startDate: null,
      endDate: null,
      smallDevice: false,
      load: true
    };
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    let isBrowser = typeof window !== 'undefined';
    if (isBrowser) {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);

    }
  }

  componentWillUnmount() {
    let isBrowser = typeof window !== 'undefined';
    if (isBrowser) {
      window.removeEventListener('resize', this.handleResize);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { formStartDate, formEndDate } = nextProps;
    if (formStartDate && formEndDate) {
      this.setState({
        startDate: moment(formStartDate),
        endDate: moment(formEndDate)
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { locale } = this.props.intl;
    const { locale: prevLocale } = prevProps.intl;

    if (locale !== prevLocale) {
      this.setState({ load: false });
      clearTimeout(this.loadSync);
      this.loadSync = null;
      this.loadSync = setTimeout(() => this.setState({ load: true }), 1);
    }
  }

  async onDatesChange({ startDate, endDate }) {
    const { listId, formName, checkAvailability, change, maximumNights, getSpecialPricingData } = this.props;
    const { listingData: { minNight, maxNight, maxDaysNotice } } = this.props;
    const { focusedInput } = this.state;

    this.setState({ startDate, endDate });
    await change(formName, 'startDate', startDate);
    await change(formName, 'endDate', endDate);
    if ((focusedInput === END_DATE || focusedInput === START_DATE) && endDate) {
      await getSpecialPricingData(listId, moment(startDate).format('YYYY-MM-DD'), moment(endDate).format('YYYY-MM-DD'));
      await checkAvailability(listId, moment(startDate).format('YYYY-MM-DD'), moment(endDate).format('YYYY-MM-DD'), maxNight, minNight);
    }
  }

  onFocusChange(focusedInput) {
    this.setState({
      // Force the focusedInput to always be truthy so that dates are always selectable
      focusedInput: !focusedInput ? START_DATE : focusedInput,
    });
  }

  handleResize(e) {
    let isBrowser = typeof window !== 'undefined';
    let smallDevice = isBrowser ? window.matchMedia('(max-width: 767px)').matches : false;
    this.setState({ smallDevice });
  }

  render() {
    const { focusedInput, startDate, endDate, load } = this.state;
    const { verySmallDevice, listId } = this.props;
    const { smallDevice } = this.state;
    const { listingData, locale } = this.props;
    const { loading, country } = this.props;

    const { formatMessage } = this.props.intl;
    let numberOfMonths = (smallDevice) ? 1 : 2;
    let today = getDateUsingTimeZone(country, false), condition;
    let breakPoint = getDateUsingTimeZone(country, false);
    let minNight = listingData && listingData.minNight;
    let maxNight = listingData && listingData.maxNight;
    let maxDaysNotice = listingData && listingData.maxDaysNotice;
    let bookingNoticeTime = listingData && listingData.bookingNoticeTime;

    if (maxDaysNotice === 'unavailable') {
      condition = day =>
        !isInclusivelyAfterDay(day, today) ||
        isInclusivelyAfterDay(day, today)
    } else {

      if (maxDaysNotice === '3months') {
        breakPoint.add(3, 'months');
      } else if (maxDaysNotice === '6months') {
        breakPoint.add(6, 'months');
      } else if (maxDaysNotice === '9months') {
        breakPoint.add(9, 'months');
      } else if (maxDaysNotice === '12months') {
        breakPoint.add(12, 'months');
      }

      if (maxDaysNotice !== 'available') {
        condition = day =>
          !isInclusivelyAfterDay(day, today) ||
          isInclusivelyAfterDay(day, breakPoint)
      } else if (maxDaysNotice == 'available') {
        condition = day => !isInclusivelyAfterDay(day, today)
      }
    }




    return (
      <div className={cx(s.pageContent)}>
        {
          !loading && <Col xs={12} sm={12} md={12} lg={12} className={cx(s.sectionContainer, s.boxContainer, s.listOneLeft, s.noPadddingLeftRight)}>
            <h1 className={cx(s.titleText, s.space2)}>
              <FormattedMessage {...messages.availability} />
            </h1>
            {
              minNight != null && minNight > 0 &&
              <p><span className={cx(s.text)}> <strong>{minNight} {minNight > 1 ? <FormattedMessage {...messages.nights} /> : <FormattedMessage {...messages.night} />}{' '}</strong>
                <FormattedMessage {...messages.minimumStay} />
              </span>
              </p>
            }
            <div className={cx(s.calendarContainer, 'availabilityCalendar')}>
              {!load && <Loader />}
              {
                load && <DayPickerRangeController
                  {...this.props}
                  focusedInput={focusedInput}
                  startDate={startDate}
                  endDate={endDate}
                  onDatesChange={this.onDatesChange}
                  onFocusChange={this.onFocusChange}
                  numberOfMonths={numberOfMonths}
                  isOutsideRange={condition}
                  daySize={40}
                  minimumNights={minNight > 0 ? minNight : 1}
                  onOutsideClick={() => { console.log('outside click') }}
                  renderCalendarDay={props => <CustomizableCalendarDay {...props} />}
                  renderDayContents={day => <CustomDayContents day={day} startDate={startDate} endDate={endDate} minimumNights={minNight > 0 ? minNight : 1} />}
                  transitionDuration={0}
                  anchorDirection={isRTL(locale) ? 'right' : 'left'}
                  isRTL={isRTL(locale)}

                />
              }
            </div>
          </Col>
        }
      </div>
    );
  }
}

const selector = formValueSelector('BookingForm');

const mapState = state => ({
  formStartDate: selector(state, 'startDate'),
  formEndDate: selector(state, 'endDate'),
  locale: state.intl.locale
});

const mapDispatch = {
  change,
  checkAvailability,
  getSpecialPricingData
};

export default injectIntl(withStyles(s, S)(connect(mapState, mapDispatch)(AvailabilityCalendar)));
