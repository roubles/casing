# The unofficial standard for camelCase and PascalCase

Camel case and Pascal Case are ways of writing phrases without spaces or punctuation. There is no official RFC or standard on either case. This document attempts to fill that void.

## Camel Case - *no* digits allowed

To be proper camel case a word - no digits allowed
* Must start with a lower case alphabet (a through z)
* Must have no digits (0 - 9)
* Must have no special characters
* Can have *at most* 1 uppercase alphabet in a row
* Can end in an uppercase alphabet

```
^[a-z][a-z]*(([A-Z][a-z]+)*[A-Z]*|([a-z]+[A-Z])*|[A-Z])$
```

## Camel Case - digits allowed

To be proper camel case a word - digits allowed
* Must start with a lower case alphabet (a through z)
* Must have no special characters
* Can have *at most* 1 uppercase alphabet in a row
* Can end in an uppercase alphabet

```
^[a-z][a-z0-9]*(([A-Z][a-z0-9]+)*[A-Z]*|([a-z0-9]+[A-Z])*|[A-Z])$
```

## Camel Case - *no* digits allowed - Upto 3 upper case letters

To be proper camel case a word - *no* digits allowed - Upto 3 upper case letters
* Must start with a lower case alphabet (a through z)
* Must have no digits (0 - 9)
* Must have no special characters
* Can have *at most* 3 uppercase alphabets in a row
* Can end in an uppercase alphabet

```
^[a-z][a-z]*(([A-Z]{1,3}[a-z]+)*[A-Z]{0,3}|([a-z]+[A-Z]{1,3})*|[A-Z]{1,3})$
```

## Camel Case - digits allowed - Upto 3 upper case letters

To be proper camel case a word - digits allowed - Upto 3 upper case letters
* Must start with a lower case alphabet (a through z)
* Must have no special characters
* Can have *at most* 3 uppercase alphabets in a row
* Can end in an uppercase alphabet

```
^[a-z][a-z0-9]*(([A-Z]{1,3}[a-z0-9]+)*[A-Z]{0,3}|([a-z0-9]+[A-Z]{1,3})*|[A-Z]{1,3})$
```
