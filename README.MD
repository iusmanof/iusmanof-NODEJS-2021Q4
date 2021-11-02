## Ciphering CLI Tool :floppy_disk:

:paperclip: Options of cipher cli:

1.    -c, --config: config for ciphers Config is a string with pattern {XY(-)}n, where:

- X (C - Caesar cipher, A - Atbash cipher, R - ROT-8 cipher)
- Y (1 - encode, 0 - decode)
2. -i, --input: a path to input file
3. -o, --output: a path to output file

:warning: -c / --config is required option :warning:

### Start program using path:
```
node cipher_cli -c C1-C1-R0-A -i input.txt -o output.txt
```

### Start program without using path:
:warning: if input.txt file option is not specified cli tool makes it possible to enter from the keyboard :warning: 
```
node cipher_cli -c C1-C1-R0-A 
```
