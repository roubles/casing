# The unofficial standard for camelCase and PascalCase

There is no official RFC or standard on Camel Case or Pascal Case. This document attempts to fill that void, in addition to providing tested regular expressions for the various variations of camel case and pascal case.

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

- [Camel Case - No Digits Allowed](https://github.com/roubles/casing/blob/main/README.md#camel-case---no-digits-allowed)
- [Camel Case - Digits Allowed](https://github.com/roubles/casing/blob/main/README.md#camel-case---digits-allowed)
- [Camel Case - No Digits Allowed - Upto 3 upper case letters](https://github.com/roubles/casing/blob/main/README.md#camel-case---no-digits-allowed---upto-3-upper-case-letters)
- [Camel Case - Digits Allowed - Upto 3 upper case letters](https://github.com/roubles/casing/blob/main/README.md#camel-case---digits-allowed---upto-3-upper-case-letters)
- [Pascal Case - No Digits Allowed](https://github.com/roubles/casing/blob/main/README.md#pascal-case---no-digits-allowed)
- [Pascal Case - Digits Allowed](https://github.com/roubles/casing/blob/main/README.md#pascal-case---digits-allowed)
- [Pascal Case - No Digits Allowed - Upto 3 upper case letters](https://github.com/roubles/casing/blob/main/README.md#pascal-case---no-digits-allowed---upto-3-upper-case-letters)
- [Pascal Case - Digits Allowed - Upto 3 upper case letters](https://github.com/roubles/casing/blob/main/README.md#pascal-case---digits-allowed---upto-3-upper-case-letters)

### Camel Case - *no* digits allowed

To be proper camel case a word with no digits allowed, a word:
* MUST start with a lower case alphabet (a through z)
* MUST have no digits (0 - 9)
* MUST have no spaces, punctuation or special characters
* CAN have *at most* 1 uppercase alphabet in a row
* MAY end in an uppercase alphabet

```
^[a-z][a-z]*(([A-Z][a-z]+)*[A-Z]{0,1}|([a-z]+[A-Z])*|[A-Z])$
```
- Regex 101 library entry: https://regex101.com/library/4h7A1I

#### Notable examples
* ```a``` is valid lower camel case
* ```aG``` is valid lower camel case
* ```camelCase``` is valid lower camel case
* ```camelCasE``` is valid lower camel case 
* ```aGa``` is valid lower camel case
* ```alphabet``` is valid lower camel case
* ```camelCase``` is valid lower camel case

### Camel Case - digits allowed

To be proper camel case a word with digits allowed, a word:
* MUST start with a lower case alphabet (a through z)
* MUST have no spaces, punctuation or special characters
* CAN have *at most* 1 uppercase alphabet in a row
* MAY end in an uppercase alphabet

```
^[a-z][a-z0-9]*(([A-Z][a-z0-9]+)*[A-Z]{0,1}|([a-z0-9]+[A-Z])*|[A-Z])$
```
- Regex 101 library entry: https://regex101.com/library/8nQras

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
Regex 101 link: https://regex101.com/r/L0CfKd/2

#### Notable examples
* ```streamIO``` is valid lower camel case with *no* digits allowed - Upto 3 upper case letters
* ```deviceID``` is valid lower camel case with *no* digits allowed - Upto 3 upper case letters
* ```serialNo``` is valid lower camel case with *no* digits allowed - Upto 3 upper case letters
* ```awsVPC``` is valid lower camel case with *no* digits allowed - Upto 3 upper case letters

### Camel Case - digits allowed - Upto 3 upper case letters

To be proper camel case a word - digits allowed - Upto 3 upper case letters
* MUST start with a lower case alphabet (a through z)
* MUST have no spaces, punctuation or special characters
* CAN have *at most* 3 uppercase alphabets in a row
* CAN end in an uppercase alphabet

```
^[a-z][a-z0-9]*(([A-Z]{1,3}[a-z0-9]+)*[A-Z]{0,3}|([a-z0-9]+[A-Z]{1,3})*|[A-Z]{1,3})$
```

Regex 101 link: https://regex101.com/r/njKcix/1

#### Notable examples
* ```camel01CC01``` is valid lower camel case with digits allowed - Upto 3 upper case letters

### Pascal Case - no digits allowed

To be proper pascal case a word - digits allowed - Upto 3 upper case letters
* MUST start with an upper case alphabet (A through Z)
* MUST have no digits (0 - 9)
* MUST have no spaces, punctuation or special characters
* CAN have *at most* 1 uppercase alphabet in a row
* CAN end in an uppercase alphabet

```
^[A-Z](([a-z]+[A-Z]?)*)$
```
Regex 101 link: https://regex101.com/r/0KsW4i/3

#### Notable examples
* ```A``` is valid pascal case
* ```Ag``` is valid pascal case
* ```AaA``` is valid pascal case

### Pascal Case - digits allowed

To be proper pascal case a word - digits allowed - Upto 3 upper case letters
* MUST start with an upper case alphabet (A through Z)
* MUST have no digits (0 - 9)
* MUST have no spaces, punctuation or special characters
* CAN have *at most* 1 uppercase alphabet in a row
* CAN end in an uppercase alphabet

```
^[A-Z](([a-z0-9]+[A-Z]?)*)$
```
Regex 101 link: https://regex101.com/r/sQWmep/2

#### Notable examples
* ```Aabc123``` is valid pascal case with digits allowed
* ```Pascal2Case``` is valid pascal case with digits allowed
* ```Pascal2CaseA``` is valid pascal case with digits allowed
* ```Mode2A``` is valid pascal case with digits allowed
* ```Mode2A2``` is valid pascal case with digits allowed
* ```Mode2A2A``` is valid pascal case with digits allowed
* ```SupportsIpv6OnIos``` is valid pascal case with digits allowed

### Pascal Case - *no* digits allowed - Upto 3 upper case letters

To be proper pascal case a word - digits allowed - Upto 3 upper case letters
* MUST start with an upper case alphabet (A through Z)
* MUST have no digits (0 - 9)
* MUST have no spaces, punctuation or special characters
* CAN have *at most* 3 uppercase alphabets in a row
* CAN end in an uppercase alphabet

```
^[A-Z](([A-Z]{1,2}[a-z]+)+([A-Z]{1,3}[a-z]+)*[A-Z]{0,3}|([a-z]+[A-Z]{0,3})*|[A-Z]{1,2})$
```
Regex 101 link: https://regex101.com/r/N1gVvB/2

#### Notable examples
* ```IOStream``` is valid pascal case with no digits allowed - Upto 3 upper case letters
* ```StreamIO``` is valid pascal case with no digits allowed - Upto 3 upper case letters
* ```IOStream``` is valid pascal case with no digits allowed - Upto 3 upper case letters
* ```DeviceID``` is valid pascal case with no digits allowed - Upto 3 upper case letters
* ```AwsVPC``` is valid pascal case with no digits allowed - Upto 3 upper case letters
* ```DeviceSNS``` is valid pascal case with no digits allowed - Upto 3 upper case letters
* ```CreateAMode``` is valid pascal case with no digits allowed - Upto 3 upper case letters
* ```CreateBMode``` is valid pascal case with no digits allowed - Upto 3 upper case letters
* ```ABCabcABCabc``` is valid pascal case with no digits allowed - Upto 3 upper case letters
* ```ABCabcABCabcA``` is valid pascal case with no digits allowed - Upto 3 upper case letters

### Pascal Case - digits allowed - Upto 3 upper case letters

To be proper pascal case a word - digits allowed - Upto 3 upper case letters
* MUST start with an upper case alphabet (A through Z)
* MUST have no spaces, punctuation or special characters
* CAN have *at most* 3 uppercase alphabets in a row
* CAN end in an uppercase alphabet

```
^[A-Z](([A-Z]{1,2}[a-z0-9]+)+([A-Z]{1,3}[a-z0-9]+)*[A-Z]{0,3}|([a-z0-9]+[A-Z]{0,3})*|[A-Z]{1,2})$
```
Regex 101 link: https://regex101.com/r/joAKeL/1

#### Notable examples
* ```Camel01CC01``` is valid pascal case with digits allowed - Upto 3 upper case letters
