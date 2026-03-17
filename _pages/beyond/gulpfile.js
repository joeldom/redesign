const gulp = require("gulp");
//const sass = require("sass");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();

// Compile SCSS to CSS
gulp.task("sass", function() {
  return gulp
    .src("scss/nest.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("css"))
    .pipe(browserSync.stream()); // Reload browser on CSS changes
});

// Minify and rename JS
gulp.task("js", function() {
  return gulp
    .src("js/script.js")
    .pipe(uglify())
    .pipe(rename("script.min.js"))
    .pipe(gulp.dest("js"))
    .pipe(browserSync.stream()); // Reload browser on JS changes
});

// Static Server + watching SCSS/JS/HTML files
gulp.task(
  "serve",
  gulp.series("sass", "js", function() {
    browserSync.init({
      server: "./beyond", // Set the root folder for the server
      port: 3000
    });

    // Watch SCSS files
    gulp.watch("scss/**/*.scss", gulp.series("sass"));

    // Watch JS files
    gulp.watch("js/**/*.js", gulp.series("js"));

    // Watch HTML files and reload on change
    gulp.watch("beyond/**/*.html").on("change", browserSync.reload);
  })
);

// Default task
gulp.task("default", gulp.series("serve"));
