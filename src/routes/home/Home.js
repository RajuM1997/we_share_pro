import React from "react";
import PropTypes from "prop-types";
import { graphql, compose, gql } from "react-apollo";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Home.css";
import cx from "classnames";
import { FormattedMessage, injectIntl } from "react-intl";

//Components
import BannerCaption from "../../components/Home/BannerCaption";
import HomeSlider from "../../components/Home/HomeSlider";
import NewsBox from "../../components/Home/NewsBox";
import SearchForm from "../../components/Home/SearchForm";
import Loader from "../../components/Loader";
import SeeAll from "../../components/Home/SeeAll";
import HomeKindofTrip from "../../components/Home/HomeKindofTrip";
import PopularLocationGrid from "../../components/Home/PopularLocationGrid";
// import ShareAndFindItem from "../../components/Home/ShareAndFindItem/ShareAndFindItem";
import Layout4 from "../../components/Home/Layout4";
import Layout1 from "../../components/Home/Layout1";
import Layout3 from "../../components/Home/Layout3";

// Graphql
import getRecommendQuery from "./getRecommend.graphql";
import getImageBannerQuery from "./getImageBanner.graphql";
import getMostViewedListingQuery from "./getMostViewedListing.graphql";
import getPopularLocationQuery from "./getPopularLocation.graphql";
import getStaticBlockInfoQuery from "./getStaticBlockInfo.graphql";
import getHomeBanner from "./getHomeBanner.graphql";
import getCategoryQuery from "./getCategory.graphql";
import getBannerQuery from "./getBannerHome.graphql";

// Locale
import messages from "../../locale/messages";
import ShareAndFindItem from "../../components/Home/ShareAndFindItem/ShareAndFindItem";
import SaveMoreMsg from "../../components/Home/SaveMoreMsg/SaveMoreMsg";
import NewListingItem from "../../components/Home/NewListing/NewListingItem";
import HomeOfferItem from "../../components/Home/HomeOffer/HomeOfferItem";
import HomeHosting from "../../components/Home/HomeHost/HomeHosting";
import HomeAccess from "../../components/Home/HomeAccess/HomeAccess";
import OurClientSay from "../../components/Home/OurClientSay/OurClientSay";
import Banner from "../../components/Home/Layout3/Banner";
import PopularLocationItem from "../../components/Home/PopularLocationGrid/PopularLocationItem";
import PopularLoctionItems from "../../components/Home/PopularLocationGrid/PopularLoctionItems";

class Homepage extends React.Component {
  static propTypes = {
    getRecommendData: PropTypes.shape({
      loading: PropTypes.bool,
      getRecommendData: PropTypes.array,
    }),
    getImageBannerData: PropTypes.shape({
      loading: PropTypes.bool,
      getImageBanner: PropTypes.object,
    }),
    getMostViewedListingData: PropTypes.shape({
      loading: PropTypes.bool,
      GetMostViewedListing: PropTypes.array,
    }),
    getPopularLocationData: PropTypes.shape({
      loading: PropTypes.bool,
      GetMostViewedListing: PropTypes.array,
    }),
    getCategoryData: PropTypes.shape({
      loading: PropTypes.bool,
      GetMostViewedListing: PropTypes.array,
    }),
    getBannerHomeData: PropTypes.shape({
      loading: PropTypes.bool,
      GetMostViewedListing: PropTypes.array,
    }),
    getHomeBannerData: PropTypes.shape({
      loading: PropTypes.bool,
      getHomeBanner: PropTypes.any,
    }),
    formatMessage: PropTypes.func,
  };

  static defaultProps = {
    getRecommendData: {
      loading: true,
    },
    getImageBannerData: {
      loading: true,
    },
    getMostViewedListingData: {
      loading: true,
    },
    getPopularLocationData: {
      loading: true,
    },
    getCategoryDate: {
      loading: true,
    },
    homeBannerImages: {
      loading: true,
    },
    getHomeBanner: {
      loading: true,
    },
  };

  render() {
    const {
      getRecommendData,
      getImageBannerData,
      getMostViewedListingData,
      getBannerData,
    } = this.props;
    console.log(getBannerData);
    const {
      getPopularLocationData,
      layoutType,
      getStaticBlockInfoData,
      homeBannerImages,
      getCategoryData,
      getBannerHomeData,
    } = this.props;
    const { getHomeBannerData } = this.props;
    let getHomeBanner = getHomeBannerData && getHomeBannerData.getHomeBanner;
    console.log(getHomeBannerData);

    return (
      <div className={s.root}>
        {/* {layoutType && layoutType == 1 && (
          <Layout1
            layoutType={layoutType}
            data={getBannerData}
            homeBannerImages={getHomeBanner}
          />
        )} */}

        {/* {layoutType && layoutType == 3 && (
          <Layout3
            layoutType={layoutType}
            data={getBannerData}
            homeBannerImages={getHomeBanner}
          />
        )} */}
        {getBannerHomeData.getHomeAdmin &&
          getBannerHomeData.getHomeAdmin.length > 0 && (
            <div>
              <Banner
                data={getBannerHomeData.getHomeAdmin}
                shareAndFindData={getCategoryData.getCategoryAdmin}
              />
            </div>
          )}

        {/* {layoutType && layoutType == 4 && (
          <Layout4
            layoutType={layoutType}
            data={getBannerData}
            homeBannerImages={getHomeBanner}
          />
        )} */}

        <div className={s.container}>
          {/* {layoutType && layoutType == 2 && (
            <div className={s.pageContainer}>
              <BannerCaption data={getBannerData} />
              <div className={s.pageContainer}> <SearchForm /></div>
            </div>
          )} */}
          {/* {
            layoutType && layoutType == 2 && <div className={s.pageContainer}>
              <SearchForm />
            </div>
          } */}
          {getCategoryData.getCategoryAdmin &&
            getCategoryData.getCategoryAdmin.length > 0 && (
              <div>
                <ShareAndFindItem data={getCategoryData.getCategoryAdmin} />
              </div>
            )}

          {getRecommendData.loading &&
            getImageBannerData.loading &&
            getMostViewedListingData.loading && (
              <div>
                <Loader type="text" />
              </div>
            )}
          {getRecommendData &&
            getImageBannerData &&
            getMostViewedListingData &&
            getStaticBlockInfoData &&
            !getRecommendData.loading &&
            !getImageBannerData.loading &&
            !getMostViewedListingData.loading &&
            !getStaticBlockInfoData.loading && (
              <div className={s.pageContainer}>
                {getRecommendData &&
                  getRecommendData.getRecommend &&
                  getRecommendData.getRecommend.length > 0 && (
                    <div>
                      <h3 className={s.containerTitle}>
                        <FormattedMessage {...messages.recommended} />
                        <SeeAll />
                      </h3>
                      <HomeSlider data={getRecommendData.getRecommend} />
                    </div>
                  )}

                {/* {getMostViewedListingData &&
                  getMostViewedListingData.GetMostViewedListing &&
                  getMostViewedListingData.GetMostViewedListing.length > 0 && (
                    <div className={s.pageContainer}>
                      <h3 className={s.containerTitle}>
                        <FormattedMessage {...messages.mostViewed} />
                        <SeeAll />
                      </h3>
                      <HomeSlider
                        data={getMostViewedListingData.GetMostViewedListing}
                      />
                    </div>
                  )} */}

                {/* {getPopularLocationData.getPopularLocationAdmin &&
                  getPopularLocationData.getPopularLocationAdmin.length > 0 && (
                    <div className={s.pageContainer}>
                      <h3 className={cx(s.containerTitle, s.marginLeft)}>
                        <FormattedMessage {...messages.popularLocation} />
                      </h3>
                      <PopularLocationGrid
                        data={getPopularLocationData.getPopularLocationAdmin}
                      />
                    </div>
                  )} */}
                {getPopularLocationData.getPopularLocationAdmin &&
                  getPopularLocationData.getPopularLocationAdmin.length > 0 && (
                    <div className={s.pageContainer}>
                      <PopularLoctionItems
                        data={getPopularLocationData.getPopularLocationAdmin}
                      />
                    </div>
                  )}
                {
                  <div>
                    <SaveMoreMsg />
                  </div>
                }
                {
                  <div>
                    <NewListingItem />
                  </div>
                }
                {
                  <div>
                    <HomeOfferItem />
                  </div>
                }
                {
                  <div>
                    <HomeHosting />
                  </div>
                }
                {
                  <div>
                    <OurClientSay />
                  </div>
                }
                {
                  <div>
                    <HomeAccess />
                  </div>
                }

                {/* {getImageBannerData.getImageBanner != null && (
                  <div className={s.pageContainer}>
                    <NewsBox data={getImageBannerData.getImageBanner} />
                  </div>
                )} */}

                {/* {getStaticBlockInfoData &&
                  !getStaticBlockInfoData.loading &&
                  getStaticBlockInfoData.getStaticInfo &&
                  getStaticBlockInfoData.getStaticInfo.length > 0 &&
                  getStaticBlockInfoData.getStaticInfo[0].isEnable == true && (
                    <div className="hidden-xs">
                      <HomeKindofTrip data={getStaticBlockInfoData} />
                    </div>
                  )} */}
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default compose(
  injectIntl,
  withStyles(s),
  graphql(
    gql`
      query getBanner {
        getBanner {
          id
          title
          content
        }
      }
    `,
    {
      name: "getBannerData",
      options: {
        ssr: true,
      },
    }
  ),
  graphql(getHomeBanner, {
    name: "getHomeBannerData",
    options: {
      ssr: true,
      //fetchPolicy: 'network-only'
    },
  }),
  graphql(getRecommendQuery, {
    name: "getRecommendData",
    options: {
      ssr: true,
      //fetchPolicy: 'network-only'
    },
  }),
  graphql(getMostViewedListingQuery, {
    name: "getMostViewedListingData",
    options: {
      ssr: true,
      //fetchPolicy: 'network-only'
    },
  }),
  graphql(getImageBannerQuery, {
    name: "getImageBannerData",
    options: {
      ssr: true,
    },
  }),
  graphql(getPopularLocationQuery, {
    name: "getPopularLocationData",
    options: {
      ssr: true,
    },
  }),
  graphql(getCategoryQuery, {
    name: "getCategoryData",
    options: {
      ssr: true,
    },
  }),
  graphql(getBannerQuery, {
    name: "getBannerHomeData",
    options: {
      ssr: true,
    },
  }),
  graphql(getStaticBlockInfoQuery, {
    name: "getStaticBlockInfoData",
    options: {
      ssr: true,
    },
  })
)(Homepage);
