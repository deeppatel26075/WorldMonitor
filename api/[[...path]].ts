import { createDomainGateway, serverOptions } from '../server/gateway';

// Domain routing imports (auto-generated)
import { createAviationServiceRoutes } from '../src/generated/server/worldmonitor/aviation/v1/service_server';
import { aviationHandler } from '../server/worldmonitor/aviation/v1/handler';
import { createClimateServiceRoutes } from '../src/generated/server/worldmonitor/climate/v1/service_server';
import { climateHandler } from '../server/worldmonitor/climate/v1/handler';
import { createConflictServiceRoutes } from '../src/generated/server/worldmonitor/conflict/v1/service_server';
import { conflictHandler } from '../server/worldmonitor/conflict/v1/handler';
import { createConsumerPricesServiceRoutes } from '../src/generated/server/worldmonitor/consumer_prices/v1/service_server';
import { consumerPricesHandler } from '../server/worldmonitor/consumer-prices/v1/handler';
import { createCyberServiceRoutes } from '../src/generated/server/worldmonitor/cyber/v1/service_server';
import { cyberHandler } from '../server/worldmonitor/cyber/v1/handler';
import { createDisplacementServiceRoutes } from '../src/generated/server/worldmonitor/displacement/v1/service_server';
import { displacementHandler } from '../server/worldmonitor/displacement/v1/handler';
import { createEconomicServiceRoutes } from '../src/generated/server/worldmonitor/economic/v1/service_server';
import { economicHandler } from '../server/worldmonitor/economic/v1/handler';
import { createForecastServiceRoutes } from '../src/generated/server/worldmonitor/forecast/v1/service_server';
import { forecastHandler } from '../server/worldmonitor/forecast/v1/handler';
import { createGivingServiceRoutes } from '../src/generated/server/worldmonitor/giving/v1/service_server';
import { givingHandler } from '../server/worldmonitor/giving/v1/handler';
import { createHealthServiceRoutes } from '../src/generated/server/worldmonitor/health/v1/service_server';
import { healthHandler } from '../server/worldmonitor/health/v1/handler';
import { createImageryServiceRoutes } from '../src/generated/server/worldmonitor/imagery/v1/service_server';
import { imageryHandler } from '../server/worldmonitor/imagery/v1/handler';
import { createInfrastructureServiceRoutes } from '../src/generated/server/worldmonitor/infrastructure/v1/service_server';
import { infrastructureHandler } from '../server/worldmonitor/infrastructure/v1/handler';
import { createIntelligenceServiceRoutes } from '../src/generated/server/worldmonitor/intelligence/v1/service_server';
import { intelligenceHandler } from '../server/worldmonitor/intelligence/v1/handler';
import { createLeadsServiceRoutes } from '../src/generated/server/worldmonitor/leads/v1/service_server';
import { leadsHandler } from '../server/worldmonitor/leads/v1/handler';
import { createMaritimeServiceRoutes } from '../src/generated/server/worldmonitor/maritime/v1/service_server';
import { maritimeHandler } from '../server/worldmonitor/maritime/v1/handler';
import { createMarketServiceRoutes } from '../src/generated/server/worldmonitor/market/v1/service_server';
import { marketHandler } from '../server/worldmonitor/market/v1/handler';
import { createMilitaryServiceRoutes } from '../src/generated/server/worldmonitor/military/v1/service_server';
import { militaryHandler } from '../server/worldmonitor/military/v1/handler';
import { createNaturalServiceRoutes } from '../src/generated/server/worldmonitor/natural/v1/service_server';
import { naturalHandler } from '../server/worldmonitor/natural/v1/handler';
import { createNewsServiceRoutes } from '../src/generated/server/worldmonitor/news/v1/service_server';
import { newsHandler } from '../server/worldmonitor/news/v1/handler';
import { createPositiveEventsServiceRoutes } from '../src/generated/server/worldmonitor/positive_events/v1/service_server';
import { positiveEventsHandler } from '../server/worldmonitor/positive-events/v1/handler';
import { createPredictionServiceRoutes } from '../src/generated/server/worldmonitor/prediction/v1/service_server';
import { predictionHandler } from '../server/worldmonitor/prediction/v1/handler';
import { createRadiationServiceRoutes } from '../src/generated/server/worldmonitor/radiation/v1/service_server';
import { radiationHandler } from '../server/worldmonitor/radiation/v1/handler';
import { createResearchServiceRoutes } from '../src/generated/server/worldmonitor/research/v1/service_server';
import { researchHandler } from '../server/worldmonitor/research/v1/handler';
import { createResilienceServiceRoutes } from '../src/generated/server/worldmonitor/resilience/v1/service_server';
import { resilienceHandler } from '../server/worldmonitor/resilience/v1/handler';
import { createSanctionsServiceRoutes } from '../src/generated/server/worldmonitor/sanctions/v1/service_server';
import { sanctionsHandler } from '../server/worldmonitor/sanctions/v1/handler';
import { createScenarioServiceRoutes } from '../src/generated/server/worldmonitor/scenario/v1/service_server';
import { scenarioHandler } from '../server/worldmonitor/scenario/v1/handler';
import { createSeismologyServiceRoutes } from '../src/generated/server/worldmonitor/seismology/v1/service_server';
import { seismologyHandler } from '../server/worldmonitor/seismology/v1/handler';
import { createSupplyChainServiceRoutes } from '../src/generated/server/worldmonitor/supply_chain/v1/service_server';
import { supplyChainHandler } from '../server/worldmonitor/supply-chain/v1/handler';
import { createThermalServiceRoutes } from '../src/generated/server/worldmonitor/thermal/v1/service_server';
import { thermalHandler } from '../server/worldmonitor/thermal/v1/handler';
import { createTradeServiceRoutes } from '../src/generated/server/worldmonitor/trade/v1/service_server';
import { tradeHandler } from '../server/worldmonitor/trade/v1/handler';
import { createUnrestServiceRoutes } from '../src/generated/server/worldmonitor/unrest/v1/service_server';
import { unrestHandler } from '../server/worldmonitor/unrest/v1/handler';
import { createShippingV2ServiceRoutes } from '../src/generated/server/worldmonitor/shipping/v2/service_server';
import { shippingV2Handler } from '../server/worldmonitor/shipping/v2/handler';
import { createWebcamServiceRoutes } from '../src/generated/server/worldmonitor/webcam/v1/service_server';
import { webcamHandler } from '../server/worldmonitor/webcam/v1/handler';
import { createWildfireServiceRoutes } from '../src/generated/server/worldmonitor/wildfire/v1/service_server';
import { wildfireHandler } from '../server/worldmonitor/wildfire/v1/handler';

// Custom/operational handlers
import mcpHandler from './mcp';
// @ts-expect-error — JS module, no declaration file
import reverseGeocode from './reverse-geocode.js';
import userPrefs from './user-prefs';
// @ts-expect-error — JS module, no declaration file
import wmSession from './wm-session';
import slackOauthStart from './_slack/oauth/start';
import slackOauthCallback from './_slack/oauth/callback';
import discordOauthStart from './_discord/oauth/start';
import discordOauthCallback from './_discord/oauth/callback';
// @ts-expect-error — JS module, no declaration file
import oauthAuthorize from './_oauth/authorize.js';
import oauthToken from './_oauth/token';
// @ts-expect-error — JS module, no declaration file
import oauthRegister from './_oauth/register';
import oauthAuthorizePro from './_oauth/authorize-pro';
import oauthProtectedResource from './_oauth-protected-resource';
// @ts-expect-error — JS module, no declaration file
import securityReport from './_security/report.js';
// @ts-expect-error — JS module, no declaration file
import youtubeEmbed from './_youtube/embed.js';
// @ts-expect-error — JS module, no declaration file
import youtubeLive from './_youtube/live.js';
import fetchAgentSkills from './_skills/fetch-agentskills';
import shippingWebhookSubscriber from './_v2/shipping/webhooks/[subscriberId]';
import shippingWebhookAction from './_v2/shipping/webhooks/[subscriberId]/[action]';

export const config = { runtime: 'edge' };

const domainGateways: Record<string, (req: Request) => Promise<Response>> = {
  '/api/aviation/v1': createDomainGateway(createAviationServiceRoutes(aviationHandler, serverOptions)),
  '/api/climate/v1': createDomainGateway(createClimateServiceRoutes(climateHandler, serverOptions)),
  '/api/conflict/v1': createDomainGateway(createConflictServiceRoutes(conflictHandler, serverOptions)),
  '/api/consumer-prices/v1': createDomainGateway(createConsumerPricesServiceRoutes(consumerPricesHandler, serverOptions)),
  '/api/cyber/v1': createDomainGateway(createCyberServiceRoutes(cyberHandler, serverOptions)),
  '/api/displacement/v1': createDomainGateway(createDisplacementServiceRoutes(displacementHandler, serverOptions)),
  '/api/economic/v1': createDomainGateway(createEconomicServiceRoutes(economicHandler, serverOptions)),
  '/api/forecast/v1': createDomainGateway(createForecastServiceRoutes(forecastHandler, serverOptions)),
  '/api/giving/v1': createDomainGateway(createGivingServiceRoutes(givingHandler, serverOptions)),
  '/api/health/v1': createDomainGateway(createHealthServiceRoutes(healthHandler, serverOptions)),
  '/api/imagery/v1': createDomainGateway(createImageryServiceRoutes(imageryHandler, serverOptions)),
  '/api/infrastructure/v1': createDomainGateway(createInfrastructureServiceRoutes(infrastructureHandler, serverOptions)),
  '/api/intelligence/v1': createDomainGateway(createIntelligenceServiceRoutes(intelligenceHandler, serverOptions)),
  '/api/leads/v1': createDomainGateway(createLeadsServiceRoutes(leadsHandler, serverOptions)),
  '/api/maritime/v1': createDomainGateway(createMaritimeServiceRoutes(maritimeHandler, serverOptions)),
  '/api/market/v1': createDomainGateway(createMarketServiceRoutes(marketHandler, serverOptions)),
  '/api/military/v1': createDomainGateway(createMilitaryServiceRoutes(militaryHandler, serverOptions)),
  '/api/natural/v1': createDomainGateway(createNaturalServiceRoutes(naturalHandler, serverOptions)),
  '/api/news/v1': createDomainGateway(createNewsServiceRoutes(newsHandler, serverOptions)),
  '/api/positive-events/v1': createDomainGateway(createPositiveEventsServiceRoutes(positiveEventsHandler, serverOptions)),
  '/api/prediction/v1': createDomainGateway(createPredictionServiceRoutes(predictionHandler, serverOptions)),
  '/api/radiation/v1': createDomainGateway(createRadiationServiceRoutes(radiationHandler, serverOptions)),
  '/api/research/v1': createDomainGateway(createResearchServiceRoutes(researchHandler, serverOptions)),
  '/api/resilience/v1': createDomainGateway(createResilienceServiceRoutes(resilienceHandler, serverOptions)),
  '/api/sanctions/v1': createDomainGateway(createSanctionsServiceRoutes(sanctionsHandler, serverOptions)),
  '/api/scenario/v1': createDomainGateway(createScenarioServiceRoutes(scenarioHandler, serverOptions)),
  '/api/seismology/v1': createDomainGateway(createSeismologyServiceRoutes(seismologyHandler, serverOptions)),
  '/api/supply-chain/v1': createDomainGateway(createSupplyChainServiceRoutes(supplyChainHandler, serverOptions)),
  '/api/thermal/v1': createDomainGateway(createThermalServiceRoutes(thermalHandler, serverOptions)),
  '/api/trade/v1': createDomainGateway(createTradeServiceRoutes(tradeHandler, serverOptions)),
  '/api/unrest/v1': createDomainGateway(createUnrestServiceRoutes(unrestHandler, serverOptions)),
  '/api/v2/shipping': createDomainGateway(createShippingV2ServiceRoutes(shippingV2Handler, serverOptions)),
  '/api/webcam/v1': createDomainGateway(createWebcamServiceRoutes(webcamHandler, serverOptions)),
  '/api/wildfire/v1': createDomainGateway(createWildfireServiceRoutes(wildfireHandler, serverOptions)),
};

export default async function handler(req: Request, ctx: any): Promise<Response> {
  const url = new URL(req.url);
  const pathname = url.pathname.replace(/\/+$/, '');

  // 1. Check direct endpoint matches
  if (pathname === '/api/mcp') return mcpHandler(req, ctx);
  if (pathname === '/api/reverse-geocode') return reverseGeocode(req, ctx);
  if (pathname === '/api/user-prefs') return userPrefs(req, ctx);
  if (pathname === '/api/wm-session') return wmSession(req, ctx);
  if (pathname === '/api/slack/oauth/start') return slackOauthStart(req);
  if (pathname === '/api/slack/oauth/callback') return slackOauthCallback(req, ctx);
  if (pathname === '/api/discord/oauth/start') return discordOauthStart(req);
  if (pathname === '/api/discord/oauth/callback') return discordOauthCallback(req, ctx);
  if (pathname === '/api/oauth/authorize') return oauthAuthorize(req, ctx);
  if (pathname === '/api/oauth/token') return oauthToken(req);
  if (pathname === '/api/oauth/register') return oauthRegister(req, ctx);
  if (pathname === '/api/oauth/authorize-pro') return oauthAuthorizePro(req);
  if (pathname === '/api/oauth-protected-resource') return oauthProtectedResource(req);
  if (pathname === '/api/security/report') return securityReport(req, ctx);
  if (pathname === '/api/youtube/embed') return youtubeEmbed(req, ctx);
  if (pathname === '/api/youtube/live') return youtubeLive(req, ctx);
  if (pathname === '/api/skills/fetch-agentskills') return fetchAgentSkills(req);

  // 2. Dynamic path matches (e.g. shipping webhooks)
  if (pathname.startsWith('/api/v2/shipping/webhooks/')) {
    const parts = pathname.slice('/api/v2/shipping/webhooks/'.length).split('/');
    if (parts.length === 1) {
      return shippingWebhookSubscriber(req);
    }
    if (parts.length === 2) {
      return shippingWebhookAction(req);
    }
  }

  // 3. Domain Gateway prefix checks
  for (const [prefix, gateway] of Object.entries(domainGateways)) {
    if (pathname.startsWith(prefix)) {
      return gateway(req);
    }
  }

  return new Response(JSON.stringify({ error: 'Endpoint not found', path: pathname }), {
    status: 404,
    headers: { 'Content-Type': 'application/json' },
  });
}
