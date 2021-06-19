# 03-crypto-gzip-server

This examples shows how to implement a add an encryption layer to the previous example.

## Run

To run the server you need to launch:

```bash
node crypto-gzip-receive.js
```

This will print an encryption secret (hex string) that will need to be used by clients.

Than you can send any file with:

```bash
node crypto-gzip-send.js <path_of_the_file_to_send> localhost <encryption_secret>
```

The received files will be saved in the folder `received_files`

# Important Node

- Don't Forget To Copy Secret From Receiver and use it with Sender E.g

```bash
node Sender.js helloWorld.txt localhost 7dae6a38434e01b65c6e04ff27d2caeb57c6609dfd3e5caf
```
