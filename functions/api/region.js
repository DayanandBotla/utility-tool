import {resolveRegion} from '../../src/region.mjs';
export function onRequestGet({request}){return Response.json(resolveRegion(request.cf?.country),{headers:{'Cache-Control':'private, no-store','X-Content-Type-Options':'nosniff'}})}
