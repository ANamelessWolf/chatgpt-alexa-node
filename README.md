# chatgpt-alexa-node
An experiment to use chat gpt on Alexa with NodeJS, and docker

## Requisites

### Use or make an account on OpenAI

If you already have an account on [platform.openai.com:](https://platform.openai.com/)
Follow these steps to obtain your API Key:

Go to: [platform.openai.com/api-keys](https://platform.openai.com/account/api-keys)

Log in (usually the same ChatGPT account).

Click “+ Create new secret key.”

Save the key in a safe place (it will only be displayed once).

Paste the key into your .env file:

```
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxx
```

### Use or make an account on ngrok

To install ngrok, go to the [windows](https://ngrok.com/downloads/windows) and install it if you have choco
like this.

```sh
choco install ngrok
```

Configure and run

```sh
ngrok config add-authtoken <token>
```

Start an endpoint:
```sh
ngrok http 80
``` 

You should see something like this

```
ngrok                                                                                    (Ctrl+C to quit)

❤️  ngrok? We're hiring https://ngrok.com/careers

Session Status                online
Account                       mail@gmail.com (Plan: Free)
Update                        update available (version 3.22.1, Ctrl-U to update)
Version                       3.20.0
Region                        United States (us)
Latency                       60ms
Web Interface                 http://127.0.0.1:4040
Forwarding                    https://<url> -> http://localhost:3000 
```


## Steps

Build the docker container

```sh
docker build -t chatgpt-alexa .
```

Run the container

```sh
docker run -p 3000:3000 --env-file .env chatgpt-alexa
```

You should see this message

```
ChatGPT Alexa server running on port 3000
```
