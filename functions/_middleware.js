import {resolveRegion} from '../src/region.mjs';
export function onRequest({request,next}){
 const url=new URL(request.url);
 if(url.pathname!=='/'||!['GET','HEAD'].includes(request.method))return next();
 const region=resolveRegion(request.cf?.country);
 // Only the root negotiates language. Explicit localized URLs stay stable for crawlers and visitors.
 url.pathname=`/${region.language}/`;
 return new Response(null,{status:302,headers:{Location:url.href,'Cache-Control':'private, no-store'}});
}
