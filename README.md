# Poc

This is a reproduction of an Angular issue.
When compiling with `--prod` parameter enabled the Angular builder fail with the following message: __ERROR in Cannot assign to a reference or variable!__
Without any information about the error.

## The example error
In this demo the error is located in `src/app/app.component.html` on line __4__.
According to [@Angular/material documentation](https://material.angular.io/components/select/api) the expression `[(value)]="element"` is wrong. The `value` paramenter is one-way so the correct expression should be `[value]="element"`.

## Why another Issue.
Some other issues have been opened, and closed after [this PR](https://github.com/angular/angular/pull/34339) has been merged, but this use-case is a little different.
In this case the wrong expression is harder to find with the information given by the build log cause the Expression Parser is not parsing the html "as is" but a "pre-elaborated" version.
The error message (with the currently fixed builder) will be like this:
__Cannot assign value "$event" to template variable "element". Template variables are read-only.__
But it can be hard to find the true error since there is no expression that explicit assign "$event" to variable "element". Especially in large projects.

## Advice
Can be usefull have the location of the wrong expression within the error log. Like the name of the file and the line.

## To reproduce the error
```console
$ npm run build:prod 
```