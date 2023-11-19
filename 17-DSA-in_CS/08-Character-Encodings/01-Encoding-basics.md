Character encodings are a way of representing characters as numbers. They are used to store and transmit text. The most common character encoding is ASCII, which is a 7-bit encoding. This means that each character is represented by a number between 0 and 127. The ASCII character set contains 128 characters, including letters, numbers, punctuation, and control characters. The ASCII character set is a subset of the Unicode charUnicode is a standard for encoding characters acter set, which is a 16-bit encoding. Unicode is a superset of ASCII, so ASCII characters can be represented by Unicode. Unicode is the most common character encoding used on the web.
## Unicode
Unicode is a standard for encoding characters. It is a superset of ASCII, which means that ASCII is a subset of Unicode. Unicode is a 16-bit encoding, which means that it can encode 2^16 = 65536 characters. This is a lot more than ASCII, which can only encode 128 characters.
An example character set is Unicode. Here is part of its code point mapping (note that code points are traditionally written in hex):

   25 PERCENT SIGN
   2C COMMA
   54 LATIN CAPITAL LETTER T
   5D RIGHT SQUARE BRACKET
   B0 DEGREE SIGN
   C9 LATIN CAPITAL LETTER E WITH ACUTE
  2AD LATIN LETTER BIDENTAL PERCUSSIVE
  39B GREEK CAPITAL LETTER LAMDA
  446 CYRILLIC SMALL LETTER TSE
  543 ARMENIAN CAPITAL LETTER CHEH
  5E6 HEBREW LETTER TSADI
  635 ARABIC LETTER SAD
  71D SYRIAC LETTER YUDH
  784 THAANA LETTER BAA
  94A DEVANAGARI VOWEL SIGN SHORT O
  9D7 BENGALI AU LENGTH MARK
  BEF TAMIL DIGIT NINE
  D93 SINHALA LETTER AIYANNA
  F0A TIBETAN MARK BKA- SHOG YIG MGO
 11C7 HANGUL JONGSEONG NIEUN-SIOS
 1293 ETHIOPIC SYLLABLE NAA
 13CB CHEROKEE LETTER QUV
 2023 TRIANGULAR BULLET
 20A4 LIRA SIGN
 20B4 HRYVNIA SIGN
 2105 CARE OF
 213A ROTATED CAPITAL Q
 21B7 CLOCKWISE TOP SEMICIRCLE ARROW
 2226 NOT PARALLEL TO
 2234 THEREFORE
 2248 ALMOST EQUAL TO
 265E BLACK CHESS KNIGHT
 30FE KATAKANA VOICED ITERATION MARK
 4A9D HAN CHARACTER LEATHER THONG WOUND AROUND THE HANDLE OF A SWORD
 7734 HAN CHARACTER DAZZLED
 99ED HAN CHARACTER TERRIFY, FRIGHTEN, SCARE, SHOCK
 AAB9 TAI VIET VOWEL UEA
1201F CUNEIFORM SIGN AK TIMES SHITA PLUS GISH
1D111 MUSICAL SYMBOL FERMATA BELOW
1D122 MUSICAL SYMBOL F CLEF
1F08E DOMINO TILE VERTICAL-06-01
1F001 SQUID
1F0CE PLAYING CARD KING OF DIAMONDS
1F382 BIRTHDAY CAKE
1F353 STRAWBERRY
1F4A9 PILE OF POO
Because characters can have multiple glyphs, Unicode lets you represent characters unambiguously with U+ followed by four to six hex digits (e.g. U+00C9, U+1D122).

## ASCII
ASCII is a character set that is exactly equivalent to the first 128 mappings of Unicode. Obviously it doesn’t have enough characters. However it is commonly used, because many Internet protocols require it! It is a common subset of many character sets and something most people can agree on.

