
# WS server example

# import asyncio
# import websockets


# async def hello(websocket, path):
#     name = await websocket.recv()
#     print(f"< {name}")

#     greeting = f"Hello {name}!"

#     await websocket.send(greeting)
#     print(f"> {greeting}")

# start_server = websockets.serve(hello, "localhost", 4000)

# asyncio.get_event_loop().run_until_complete(start_server)
# asyncio.get_event_loop().run_forever()


# WS server that sends messages at random intervals

import asyncio
import datetime
import random
import websockets


async def time(websocket, path):
    while True:
        now = datetime.datetime.utcnow().isoformat() + "Z"
        await websocket.send(now)
        await asyncio.sleep(random.random() * 3)

start_server = websockets.serve(time, "localhost", 4000)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
