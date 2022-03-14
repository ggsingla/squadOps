from asyncio.tasks import sleep
import discord
import random
import requests
import json
import os
from datetime import datetime, time, timedelta
import asyncio
from discord.ext import tasks, commands
from requests.api import get

TOKEN = os.environ.get("TOKEN2")  # token saved in environment variable locally
# Api-key saved in environment variable locally
Rapidapi = os.environ.get("RAPIDAPI")
client = discord.Client()

def get_profile():
    url = f"https://hackmol3.herokuapp.com/profile/show"
    body = {
        'email': "chiragg593@gmail.com",
    }
    Postresponse = requests.request("POST", url,json=body).text
    json_data = json.loads(Postresponse)
    return json_data

def get_hackathons():
    url = f"https://hackmol3.herokuapp.com/hackthon/show"
    response = requests.request("GET", url).text
    json_data = json.loads(response)
    return(json_data)

def get_teams():
    url = f"https://hackmol3.herokuapp.com/team/show"
    response = requests.request("GET", url).text
    json_data = json.loads(response)
    return(json_data)

async def sign_up(email,name,password):
    url = f"https://hackmol3.herokuapp.com/signup"
    body = {
        'email': f"{email}",
        'name': f"{name}",
        'password': f"{password}",
    }
    print(body)
    Postresponse = requests.request("POST", url,json=body).text
    return Postresponse

async def authenticator(message):
  def check1(message:discord.message):
      if "@" not in message.content:
        return False
      else:
        return True
  # def check0(message: discord.message):
  #     if len(message.content)<1:
  #       return False
  #     else:
  #       return True
  def check2(message: discord.message):
      if len(message.content)>8:
        return False
      else:
        return True
  await message.author.send("Please enter your email")
  email = await client.wait_for('message',check=check1)
  await message.author.send("Please enter your name")
  name = await client.wait_for('message',check=check2)
  await message.author.send("Please enter your password")
  password = await client.wait_for('message',check=check2)
  response = await sign_up(email.content,name.content,password.content)
  await message.author.send(f'{response}')
  return True

@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))
    channel = client.get_channel(channel_id)
    await background_task(channel)


@client.event
async def on_message(message):  # basic setup done below to respond to messages
    username = str(message.author).split('#')[0]
    userid= str(message.author.id)
    user_message = str(message.content)
    # channel = str(message.channel.name)
    print(f'{username}:{user_message}')

    if message.author == client.user:
        return
    if (isinstance(message.channel, discord.DMChannel))!=True:
      if message.channel.name == 'team-formation':  # in specific channel only
          if user_message.lower() == '^hello':
              await message.channel.send(f'Hey geek {username}!')
          elif user_message.lower() == '^bye':
              await message.channel.send(f'Bye,{username} See you in next hackathon!')
              return
          elif user_message.lower() == '^hackathons':  # checking random function
              await message.channel.send(f'These Hackthons are on the way!')
              HackathonsJson = get_hackathons()
              for i in HackathonsJson:
                  Date=i['dates'][:-5]
                  stdate=i['startDate'][:-5]
                  enddate=i['endDate'][:-5]
                  NewDate,Startdate,Enddate = Date.replace("T","  "),stdate.replace("T","  "),enddate.replace("T","  ")
                  # for j in i['teams'] :
                    
                  embedVar = discord.Embed(title=f"{i['name']}",name="Squadops.com",url="https://hackmol3.tech/",
                      description= "",color=0x00ff00)
                  embedVar.add_field(name="Dates", value=f"{NewDate}", inline=False)
                  embedVar.add_field(name="Start Date", value=f'{Startdate}', inline=False)
                  embedVar.add_field(name="End Date", value=f'{Enddate}', inline=False)
                  embedVar.add_field(name="Venue", value=f'{i["venue"]}', inline=False)
                  embedVar.add_field(name="Team Size", value=f'size:{i["size"]}', inline=False)
                  await message.channel.send(embed=embedVar)   
              return
          elif user_message.startswith('^myid'):
            await message.channel.send(f'Your ID is {userid}')
            return
          elif user_message.startswith('^profile'):
              await message.channel.send(f"Your Skills are: {get_profile()['skills']} \n Social Links: {get_profile()['socialLinks']} \n Email: {get_profile()['email']}")
              return
          elif user_message.startswith('^signup'):
            await authenticator(message)
            return
          elif user_message.lower() == '^help':  # anywhere
            embedVar = discord.Embed(title="Squadops Bot",name="Squadops.com",url="https://bhagavadgita.io/",description="Click to visit site",color=0x00ff00)
            embedVar.add_field(name="^hello, ^bye", value="The bot responds to hello and bye", inline=False)
            embedVar.add_field(name="^myid", value="To get your discord id", inline=False)
            embedVar.add_field(name="^profile", value="To get your squadops profile", inline=False)
            embedVar.add_field(name="^hackathons", value="Use this command to get details about upcoming hackthons", inline=False)
            embedVar.add_field(name="^signup", value="Use this command to signup", inline=False)
            await message.channel.send(embed=embedVar)
            return

WHEN = time(3, 30, 0)  # 3:30 AM UTC = 9:00 AM IST
channel_id=865245003885576232

async def called_once_a_day(channel):  # Fired every day
    await client.wait_until_ready()
    # print(channel)
    await channel.send("scheduled")


@tasks.loop(seconds=1)
async def background_task(channel):
    now = datetime.utcnow()
    # Make sure loop doesn't start after {WHEN} as then it will send immediately the first time as negative seconds will make the sleep yield instantly
    if now.time() > WHEN:
        tomorrow = datetime.combine(now.date() + timedelta(days=1), time(0))
        # Seconds until tomorrow (midnight)
        seconds = (tomorrow - now).total_seconds()
        # Sleep until tomorrow and then the loop will start
        await asyncio.sleep(seconds)
    while True:
        # You can do now() or a specific timezone if that matters, but I'll leave it with utcnow
        now = datetime.utcnow()
        target_time = datetime.combine(
            now.date(), WHEN)  # 6:00 PM today (In UTC)
        seconds_until_target = (target_time - now).total_seconds()
        # Sleep until we hit the target time
        await asyncio.sleep(seconds_until_target)
        # Call the helper function that sends the message
        await called_once_a_day(channel)
        tomorrow = datetime.combine(now.date() + timedelta(days=1), time(0))
        # Seconds until tomorrow (midnight)
        seconds = (tomorrow - now).total_seconds()
        # Sleep until tomorrow and then the loop will start a new iteration
        await asyncio.sleep(seconds)

client.run(TOKEN)
