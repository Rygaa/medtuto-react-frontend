const context = {
    state: {
        sites: {
            
        }
    }
}


if (context.state.sites != undefined
    && context.state.sites.length > 0
    && context.state.sites[0].products != undefined
    && context.state.sites[0].products.length > 0
) {
    console.log('Success');

}