module.exports = (file: string) => {
    'use strict';

    return (resolve: any) => require([`@V/${file}`], resolve);
}
