const del = require('del');
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const shell = require('gulp-shell');
const replace = require('gulp-replace');
const ts = require('gulp-typescript');
const typescript = require('typescript');
const tsConfig = require('./tsconfig.json');

import { Gulpclass, Task, SequenceTask, MergedTask } from 'gulpclass';

const packageLocation = `${tsConfig.compilerOptions.outDir}/package`;
const packageSourceLocation = `${packageLocation}/src`;

@Gulpclass()
export class Gulpfile {
  @Task()
  clean (next: Function) {
    return del(['./build'], next);
  }

  @MergedTask()
  copyPackageFiles () {
    const files = [
      './LICENSE',
      './README.md'
    ];
    return [
      gulp.src(files).pipe(gulp.dest(packageLocation)),
      gulp.src('./package.json')
        .pipe(replace('\"private\": true', '\"private\": false'))
        .pipe(gulp.dest(packageLocation))
    ];
  }

  @Task()
  copySources () {
    return gulp.src(tsConfig.include)
      .pipe(gulp.dest(packageSourceLocation));
  }

  @MergedTask()
  compile () {
    const inputs = [...tsConfig.include, './node_modules/@types/**/*.ts'];
    const tsProject = ts.createProject('tsconfig.json', { typescript });
    const tsResult = gulp.src([...inputs, './node_modules/@types/**/*.ts'])
      .pipe(sourcemaps.init())
      .pipe(tsProject());
    return [
      tsResult.dts.pipe(gulp.dest(packageSourceLocation)),
      tsResult.js
        .pipe(sourcemaps.write('.', { sourceRoot: '', includeContent: true }))
        .pipe(gulp.dest(packageSourceLocation))
    ];
  }

  @SequenceTask()
  build () {
    return [
      'clean',
      ['copyPackageFiles', 'copySources', 'compile']
    ];
  }

  @Task()
  publish () {
    return gulp.src('package.json', { read: false })
      .pipe(shell(['cd ./build/package && npm publish']));
  }
}
