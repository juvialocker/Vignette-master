import { RouteConfig } from 'vue-router';
export interface CustomRC extends RouteConfig {
  txt?: string;
  children: RouteConfig[];
}
