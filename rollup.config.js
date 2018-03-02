export default {
    input: 'dist/index.js',
    sourceMap: false,
    output: {
        format: 'umd',
        file: 'dist/bundles/datatable.umd.js',
    },
    name: 'ng.datatable',
    external: [
        '@angular/core', 'angular/common', 'angular/forms', 'ngDevMode'
    ],
    globals: {
        '@angular/core': 'ng.core',
        'rxjs/Observable': 'Rx',
        'rxjs/ReplaySubject': 'Rx',
        'rxjs/add/operator/map': 'Rx.Observable.prototype',
        'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
        'rxjs/add/observable/fromEvent': 'Rx.Observable',
        'rxjs/add/observable/of': 'Rx.Observable'
    }
}
