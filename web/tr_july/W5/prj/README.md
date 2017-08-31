#### Pulled Out this from  https://github.com/mehtamohit987/client-dev-prac @ [master](https://github.com/mehtamohit987/client-dev-prac/tree/master/) from /web/tr_july/W5/prj
##### Mainly for streamlined repository features, the previous place was used as a sync repository with less than required concerns on branching.
##### Will move back after development and delete this repository.

#### Pre-requisite
Download [mongodb](http://downloads.mongodb.org/win32/mongodb-win32-x86_64-2008plus-ssl-v3.2-latest.zip?_ga=2.263624396.1576040088.1503849292-928003886.1503849292) & unizip. Assuming unzipped path to be MONGO_PATH

Then,

```bash
{MONGO_PATH}/bin/mongod.exe --dbpath={MONGO_PATH}/data
{MONGO_PATH}/bin/mongo.exe < config/hapi/mongo_pre_fillup_commands.txt
```

Then,

For production:
```bash
npm start
```
For development:
```bash
npm run start:dev
```