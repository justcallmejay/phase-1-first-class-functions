function receivesAFunction(spy) {
    return spy();
}

function returnsANamedFunction() {
    return function aNamedFunction() {

    }

}

function returnsAnAnonymousFunction() {
    return function() {

    }
    //     return ''
    // }
}
