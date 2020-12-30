import {
  V2Prediction as Prediction,
  PredictRequest,
} from '@wix/ambassador-wix-atlas-service-web/types';
import { OmitPolyfill } from '../../common';
import {
  AutocompleteClient,
  UseAutocompleteClient,
} from '../usePlacesAutocomplete/autocompleteClient';

export type AtlasRequestOptions = OmitPolyfill<PredictRequest, 'input'>;
export interface AtlasInitOptions {
  baseUrl?: string;
}
export { Prediction };

export type AtlasClient = AutocompleteClient<Prediction, AtlasRequestOptions>;

declare const useAtlasClient: UseAutocompleteClient<
  AtlasClient,
  AtlasInitOptions
>;

export default useAtlasClient;
