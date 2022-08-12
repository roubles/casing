# The unofficial standard for camelCase and PascalCase

There is no official RFC or standard on either case. This document attempts to fill that void, in addition to providing tested regular expressions for the various variations of camel case and pascal case.

## Rules
Camel Case can be broken down into: 
* Lower Camel Case, also known as **Camel Case**, starts with a *lower* case alphabet
* Upper Camel Case, also known as **Pascal Case**, starts with an *upper* case alphabet 

Common rules:
* Camel case words MUST start with a lower case alphabet or an upper case alphabet
* Camel case words CAN AT MOST have one capital letter in a row. Note: some implementations allow for more than one upper case alphabet in a row, to support tech usecases such as ```deviceID```, ```SerialNo```, ```IOStream```, ```StreamIO```, ```awsVPC```. [[1](https://docs.microsoft.com/en-us/dotnet/standard/design-guidelines/capitalization-conventions)]
* Camel case words MUST HAVE no Spaces, punctuation, underscores, dots and special characters.
* Camel case words MAY have all lower case alphabets.
* Camel case words MAY end in an upper case alphabet.
* Camel case words MAY contain numbers (depending on the implementation/usecases)

## Camel Case Variations with Regular Expressions
### Camel Case - *no* digits allowed

To be proper camel case a word - no digits allowed
* MUST start with a lower case alphabet (a through z)
* MUST have no digits (0 - 9)
* MUST have no spaces, punctuation or special characters
* CAN have *at most* 1 uppercase alphabet in a row
* MAY end in an uppercase alphabet

```
^[a-z][a-z]*(([A-Z][a-z]+)*[A-Z]{0,1}|([a-z]+[A-Z])*|[A-Z])$
```
Regex 101 link: https://regex101.com/r/4h7A1I/1

#### Notable examples
* ```a``` is valid lower camel case
* ```aG``` is valid lower camel case
* ```camelCase``` is valid lower camel case
* ```camelCasE``` is valid lower camel case 
* ```aGa``` is valid lower camel case
* ```alphabet``` is valid lower camel case
* ```camelCase``` is valid lower camel case

### Camel Case - digits allowed

To be proper camel case a word - digits allowed
* MUST start with a lower case alphabet (a through z)
* MUST have no spaces, punctuation or special characters
* CAN have *at most* 1 uppercase alphabet in a row
* MAY end in an uppercase alphabet

```
^[a-z][a-z0-9]*(([A-Z][a-z0-9]+)*[A-Z]{0,1}|([a-z0-9]+[A-Z])*|[A-Z])$
```
Regex 101 link: https://regex101.com/r/LUf5Pn/2

#### Notable examples
* ```cP3``` is valid lower camel case (with digits allowed)
* ```a1``` is valid lower camel case (with digits allowed)
* ```a1G``` is valid lower camel case (with digits allowed)
* ```a123``` is valid lower camel case (with digits allowed)
* ```camelCa1``` is valid lower camel case (with digits allowed)
* ```camel01C``` is valid lower camel case (with digits allowed)

### Camel Case - *no* digits allowed - Upto 3 upper case letters

To be proper camel case a word - *no* digits allowed - Upto 3 upper case letters
* Must start with a lower case alphabet (a through z)
* Must have no digits (0 - 9)
* MUST have no spaces, punctuation or special characters
* Can have *at most* 3 uppercase alphabets in a row
* Can end in an uppercase alphabet

```
^[a-z][a-z]*(([A-Z]{1,3}[a-z]+)*[A-Z]{0,3}|([a-z]+[A-Z]{1,3})*|[A-Z]{1,3})$
```

### Camel Case - digits allowed - Upto 3 upper case letters

To be proper camel case a word - digits allowed - Upto 3 upper case letters
* MUST start with a lower case alphabet (a through z)
* MUST have no spaces, punctuation or special characters
* CAN have *at most* 3 uppercase alphabets in a row
* CAN end in an uppercase alphabet

```
^[a-z][a-z0-9]*(([A-Z]{1,3}[a-z0-9]+)*[A-Z]{0,3}|([a-z0-9]+[A-Z]{1,3})*|[A-Z]{1,3})$
```
