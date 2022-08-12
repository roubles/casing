# The unofficial standard for camelCase and PascalCase

Camel case and Pascal Case are ways of writing phrases without spaces or punctuation. There is no official RFC or standard on either case. This document attempts to fill that void.

Camel Case can be broken down into Lower Camel Case and Upper Camel Case. Lower Camel Case starts with a lower case alphabet, and Upper Camel Case, also known as Pascal Case, starts with an upper case alphabet.

Apart from that Camel Case has at most one capital letter in a row. That is, no two capital letters shall follow each other. Spaces, punctuation and special characters are expressly disallowed. Digits may or may not be allowed. 

## Camel Case - *no* digits allowed

To be proper camel case a word - no digits allowed
* MUST start with a lower case alphabet (a through z)
* MUST have no digits (0 - 9)
* MUST have no spaces or special characters
* CAN have *at most* 1 uppercase alphabet in a row
* CAN end in an uppercase alphabet

```
^[a-z][a-z]*(([A-Z][a-z]+)*[A-Z]*|([a-z]+[A-Z])*|[A-Z])$
```

## Camel Case - digits allowed

To be proper camel case a word - digits allowed
* MUST start with a lower case alphabet (a through z)
* MUST have no spaces or special characters
* CAN have *at most* 1 uppercase alphabet in a row
* CAN end in an uppercase alphabet

```
^[a-z][a-z0-9]*(([A-Z][a-z0-9]+)*[A-Z]*|([a-z0-9]+[A-Z])*|[A-Z])$
```

## Camel Case - *no* digits allowed - Upto 3 upper case letters

To be proper camel case a word - *no* digits allowed - Upto 3 upper case letters
* Must start with a lower case alphabet (a through z)
* Must have no digits (0 - 9)
* MUST have no spaces or special characters
* Can have *at most* 3 uppercase alphabets in a row
* Can end in an uppercase alphabet

```
^[a-z][a-z]*(([A-Z]{1,3}[a-z]+)*[A-Z]{0,3}|([a-z]+[A-Z]{1,3})*|[A-Z]{1,3})$
```

## Camel Case - digits allowed - Upto 3 upper case letters

To be proper camel case a word - digits allowed - Upto 3 upper case letters
* MUST start with a lower case alphabet (a through z)
* MUST have no spaces or special characters
* CAN have *at most* 3 uppercase alphabets in a row
* CAN end in an uppercase alphabet

```
^[a-z][a-z0-9]*(([A-Z]{1,3}[a-z0-9]+)*[A-Z]{0,3}|([a-z0-9]+[A-Z]{1,3})*|[A-Z]{1,3})$
```
