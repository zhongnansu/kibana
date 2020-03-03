import { IRouter } from '../../../../src/core/server';
import { schema } from '@kbn/config-schema';
import { generatePDF } from './report';



let settings = {
  width: 1440,
  height: 2560,
  url: '',
  filename: "default_name",
  isLandScape: false,
  deviceScaleFactor: 1,
  pageRanges: "",
  format: 'A2'
};



export function defineRoutes(router: IRouter) {
  router.get(
    {
      path: '/api/download_button/example',
      validate: false,
    },
    async (context, request, response) => {
      return response.ok({
        body: {
          time: new Date().toISOString(),
        },
      });
    }
  );

  router.post(
      {
        path: '/api/download_button/download',
        validate: {
          body: schema.object({
            url: schema.string()
          })
          // body: internalUserSchema,
        }
      },
      async (context, request, response) => {
        const data = request.body.url;
        console.log(data);
        // settings.url = "https://demo.elastic.co/app/kibana#/dashboard/722b74f0-b882-11e8-a6d9-e546fe2bba5f?_g=(refreshInterval:(pause:!f,value:900000),time:(from:now-7d,to:now))&_a=(description:'Analyze%20mock%20eCommerce%20orders%20and%20revenue',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(vis:(colors:('Men!'s%20Accessories':%2382B5D8,'Men!'s%20Clothing':%23F9BA8F,'Men!'s%20Shoes':%23F29191,'Women!'s%20Accessories':%23F4D598,'Women!'s%20Clothing':%2370DBED,'Women!'s%20Shoes':%23B7DBAB))),gridData:(h:10,i:'1',w:36,x:12,y:18),id:'37cc8650-b882-11e8-a6d9-e546fe2bba5f',panelIndex:'1',type:visualization,version:'7.5.1'),(embeddableConfig:(vis:(colors:(FEMALE:%236ED0E0,MALE:%23447EBC),legendOpen:!f)),gridData:(h:11,i:'2',w:12,x:12,y:7),id:ed8436b0-b88b-11e8-a6d9-e546fe2bba5f,panelIndex:'2',type:visualization,version:'7.5.1'),(embeddableConfig:(),gridData:(h:7,i:'3',w:18,x:0,y:0),id:'09ffee60-b88c-11e8-a6d9-e546fe2bba5f',panelIndex:'3',type:visualization,version:'7.5.1'),(embeddableConfig:(),gridData:(h:7,i:'4',w:30,x:18,y:0),id:'1c389590-b88d-11e8-a6d9-e546fe2bba5f',panelIndex:'4',type:visualization,version:'7.5.1'),(embeddableConfig:(),gridData:(h:11,i:'5',w:48,x:0,y:28),id:'45e07720-b890-11e8-a6d9-e546fe2bba5f',panelIndex:'5',type:visualization,version:'7.5.1'),(embeddableConfig:(),gridData:(h:10,i:'6',w:12,x:0,y:18),id:'10f1a240-b891-11e8-a6d9-e546fe2bba5f',panelIndex:'6',type:visualization,version:'7.5.1'),(embeddableConfig:(),gridData:(h:11,i:'7',w:12,x:0,y:7),id:b80e6540-b891-11e8-a6d9-e546fe2bba5f,panelIndex:'7',type:visualization,version:'7.5.1'),(embeddableConfig:(vis:(colors:('0%20-%2050':%23E24D42,'50%20-%2075':%23EAB839,'75%20-%20100':%237EB26D),defaultColors:('0%20-%2050':'rgb(165,0,38)','50%20-%2075':'rgb(255,255,190)','75%20-%20100':'rgb(0,104,55)'),legendOpen:!f)),gridData:(h:11,i:'8',w:12,x:24,y:7),id:'4b3ec120-b892-11e8-a6d9-e546fe2bba5f',panelIndex:'8',type:visualization,version:'7.5.1'),(embeddableConfig:(vis:(colors:('0%20-%202':%23E24D42,'2%20-%203':%23F2C96D,'3%20-%204':%239AC48A),defaultColors:('0%20-%202':'rgb(165,0,38)','2%20-%203':'rgb(255,255,190)','3%20-%204':'rgb(0,104,55)'),legendOpen:!f)),gridData:(h:11,i:'9',w:12,x:36,y:7),id:'9ca7aa90-b892-11e8-a6d9-e546fe2bba5f',panelIndex:'9',type:visualization,version:'7.5.1'),(embeddableConfig:(),gridData:(h:18,i:'10',w:48,x:0,y:54),id:'3ba638e0-b894-11e8-a6d9-e546fe2bba5f',panelIndex:'10',type:search,version:'7.5.1'),(embeddableConfig:(isLayerTOCOpen:!f,mapCenter:(lat:45.88578,lon:-15.07605,zoom:2.11),openTOCDetails:!()),gridData:(h:15,i:'11',w:24,x:0,y:39),id:'2c9c1f60-1909-11e9-919b-ffe5949a18d2',panelIndex:'11',type:map,version:'7.5.1'),(embeddableConfig:(),gridData:(h:15,i:'12',w:24,x:24,y:39),id:b72dd430-bb4d-11e8-9c84-77068524bcab,panelIndex:'12',type:visualization,version:'7.5.1')),query:(language:kuery,query:''),timeRestore:!t,title:'%5BeCommerce%5D%20Revenue%20Dashboard',viewMode:view)";
        settings.url = data;
        generatePDF(settings);

        return response.ok({
          body: {
            time: new Date().toISOString(),
            url: data,
          },
        });
      }
  );
}
// Download Button
// export function downloadRoutes(router: IRouter) {
//   router.post(
//     {
//       path: '/api/download_button/download',
//       validate: false,
//     },
//     async (context, request, response) => {
//       const data = request.body.title;
//       return response.ok({
//         body: {
//           time: new Date().toISOString(),
//           text: data,
//         },
//       });
//     }
//   );
// }
