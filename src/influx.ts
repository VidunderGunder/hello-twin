// const { InfluxDB, Point } = require("@influxdata/influxdb-client");

// const token = process.env.TOKEN;
// const org = process.env.ORG;
// const bucket = process.env.BUCKET;
// const url = process.env.URL;

// const client = new InfluxDB({
//   url,
//   token,
// });

// const writeApi = client.getWriteApi(org, bucket);
// writeApi.useDefaultTags({ host: "host1" });

// const point = new Point("arduino").floatField("millis", 23.43234543);
// writeApi.writePoint(point);
// writeApi
//   .close()
//   .then(() => {
//     console.log("FINISHED");
//   })
//   .catch((e: any) => {
//     console.error(e);
//     console.log("\\nFinished ERROR");
//   });
