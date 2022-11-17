const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    version: "1.0",
    title: "Willow",
    description: "Willow, the real estate API",
  },
  host: "",
  basePath: "/",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "Willow API",
      description: "CRUD operations accessing the 4 collections", //
    },
  ],

  definitions: {}, // by default: empty object (Swagger 2.0)
  components: {}, // by default: empty object (OpenAPI 3.x)
};
const outputFile = "./swagger.json";
const endpointsFiles = ["./index"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
  require("./index");
});
