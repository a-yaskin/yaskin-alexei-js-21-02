## String Methods

str.charAt(17)\
`str[17] = 'T'` does not change str, just to read\
str.charCodeAt(17)\
\u00BD unicode for 1/2

str.toLowerCase() (toLocaleLowerCase)\
str.toUpperCase()\
str.indexOf('substringToLookUp', indexToStart): number;
-1 if no entry

str.lastIndexOf() same but reverse\
str.includes('substr', indexToStart): boolean\
str.startsWith('substr'): boolean\
str.endsWith('substr'): boolean\

str.slice(7, 8): string; does not change str
(last index char is not included),
accepts negative indexes and even both positives
and negatives; if 1 arg, cuts to the end\
str.substring(5, 3): string; order does not matter,
but does not accept negatives\
str.substr(index:-5, length:3): string

str.concat(args/arr)\
str.split(separator:' '): Array\
str.repeat(count:5)

str.search(regex:'string'): index of the first entry\
str.replace(searchVal:'string', replaceVal:'string')\

str.padStart(20,'***') / padEnd()\
str.trim() / trimLeft trimRight / trimStart / trimEnd

## Regular Expressions

new RegExp('\\dlearn','g')\
/\dlearn/g

g - global\
i - insensitive to case\
s - any char for '.' ???\
m - multiline

regexp.test(string): boolean\
string.match(regexp): array of matches\
string.replace(regexp, replaceVal): new string

#### Symbol classes

\d = `[0-9]` - digit\
\s = `[\t\n\v\f\r]` - space\
\w = `[a-zA-Z0-9_]` - word

##### reverse classes

\D, \S, \W - anything but the class members\
. - any char excl. \n (or any char with flag s)

string.match(/\d/g): array of all found digits\
`string.replace(/\s/g, '_')`: new string with spaces
replaced with '`_`'\
`string.replace(/\w/g, '*')`: new string with
letters/numbers/`_` replaced with '`*`'

regexp.test(string) with g flag updates lastIndex
(for found exp.)

#### Start/end anchors

^ - beginning,\
$ - end of string

/^...$/.test(string) - checks that string is 3 chars
long\
/^\d\d-\d\d-\d\d\d\d \d\d:\d\d$/ - date/time format

\b - boundaries of word (latin symbols, digits, `_`)\
`[lc]` - a set of chars: `/\b[lc]/gi` - search
for l and c at boundaries globally insensitive\
`[a-z]` - diapason\
`[a-zI]` / `[a-zA-Z]` - may combine 

#### Exclusion from a diapason

`[^lke]` - any except these chars

#### Quantifiers

const regex = `/^\d{4}-[a-z]{4}-\d{4}-\d{4}$/g`;  
const string = '1234-asdf-1234-1234';  
regex.test(string): boolean

`/^\w{8,}$/g` - password should be not less than
8 symbols (or `{8,10}` - from 8 to 10 symbols)

`* = {0,}`  
`+ = {1,}`  
`? = {0,1}`

    /^[а-яА-Я]+ [а-яА-Я]+( [а-яА-Я]*)?$/
    .test('Цыганов Евгений Михайлович')

    /^\w+@\w+\.(com|ru)$/
    .test('any@email.com')

(....|....) <<< parentheses group

#### Hungry and Lazy Quantifiers

    /\(.+\)/g <<<< hungry
    'Тесла (Циалковский) Павлов (Ньютон) Эдиссон'
        .match(regExp)

    regExp = /\(.+?\)/g <<<< lazy (use '?')
    'Тесла (Циалковский) Павлов (Ньютон) Эдиссон'
        .match(regExp)

#### Forward-looking match

    regex = 
    /(?<year>\d{4})-(?<month>\d{2})-(?<date>\d{2})/gi
    '1999-02-25'.replace(regex,
    '$<date>-$<month>-$<year>')

    regex = 
    /\d+\$/gi

To exclude '$' from the result:

    >>> /\d+(?=\$)/gi << say it'd be '$' after,
    but it is not a part of the result
    OR: to exclude substrings WITH '$':
    /\d+(?!\$)/gi
    '2330 30$ 234% 45$ 20393&'.match(regex)

#### Retrospective looking match

Same, but at the beginning and using '<='

    /(?<=\$)\d+/gi
    '2330 $30 %234 $45 &20393'.match(regex)

reverse check '<!':

    /(?<!\$)\d+/gi

And to remove the digits not immediately after the '$':

    /(?<!(\$|\d))\d+/gi

#### Misc

`string.split(/ |-|_|\//);` <<< combining separators

`string.search(/\$|\//);`

    regex.lastIndex: 0
    regex.exec('string$string$')
    regex.lastIndex: 5
    regex.exec('string$string$')

    string.replace(/-/g, '+') << replaces ALL '-'
    with '+'
    string.replace(/-/g,
        (substr) => ':'.concat(substr, ':'))

    Array.from(string.matchAll(/-/g)) << iterable Obj
    (before Array.from); g is mandatory

#### To check RegExps

https://regex101.com/
