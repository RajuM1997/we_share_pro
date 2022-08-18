import fetch from "../core/fetch";

export async function getPageFieldBySubCategory(subCategoryId = null) {
    const query = `query (
    $subCategoryId:Int,
  ) {
      getPageFieldBySubCategory (
        subCategoryId:$subCategoryId,
      ) {
        id
        title
        step
        pageId
        subCategoryId
        isEnable
      }
    }`;
    const params = {
        subCategoryId,
    };
    try {
        const resp = await fetch('/graphql', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: query,
                variables: params
            }),
            credentials: 'include'
        });

        const { data } = await resp.json();
        return data?.getPageFieldBySubCategory || [];
    } catch (e) {
        return []
    }
}

export async function getFieldsBySubCategory(subCategoryId = null) {
    const query = `query (
    $subCategoryId:Int,
  ) {
      getFieldsBySubCategory (
        subCategoryId:$subCategoryId,
      ) {
        id
        name
        title
        type
        pageId
        subCategoryId
        fields
        isEnable
      }
    }`;
    const params = {
        subCategoryId,
    };
    try {
        const resp = await fetch('/graphql', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: query,
                variables: params
            }),
            credentials: 'include'
        });

        const { data } = await resp.json();
        return data?.getFieldsBySubCategory || [];
    } catch (e) {
        return []
    }
}
