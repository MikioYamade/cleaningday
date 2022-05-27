var app = window.tag = {};
/* -----------------------------------------------------------------
 * Conf
 ----------------------------------------------------------------- */
 //BreakPoint
 app.conf = {
    pc_w: 1280,
    pc: 980,
    tablet: 768,
    sp: 640
};

/* -----------------------------------------------------------------
 * isSmart
 ----------------------------------------------------------------- */
function isSmart () {
    var smart = false;
    if ( window.innerWidth <= app.conf.sp ) {
        smart = true;
    } else {
        smart = false;
    }
    return smart;
}
/* -----------------------------------------------------------------
 * isTablet
 ----------------------------------------------------------------- */
function isTablet () {
    var tablet = false;
    if ( window.innerWidth <= app.conf.tablet ) {
        tablet = true;
    } else {
        tablet = false;
    }
    return tablet;
}
/* -----------------------------------------------------------------
 * isPc
 ----------------------------------------------------------------- */
function isPc () {
    var pc = false;
    if ( window.innerWidth <= app.conf.pc ) {
        pc = true;
    } else {
        pc = false;
    }
    return pc;
}

function stageSize () {
    var arr = {};
    arr.w = window.innerWidth;
    arr.h = window.innerHeight;
    return arr;
}



module.exports = {
    isSmart: isSmart,
    isTablet: isTablet,
    isPc: isPc,
    stageSize: stageSize
};


