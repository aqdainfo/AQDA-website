import RestClient from './helper';

const BASE_URL = 'https://cdhr-enki.anu.edu.au/aqda/api/web';
const TOKEN    = '&access-token=BGRvR2KTnndrJ4mxihoc-awPPCfpzu_k';

const MIGRATIONS = '/d1/migrations';
const SEXOS = '/d1/sexos';
const LANGUAGES = '/d1/languages';
const GENDERS = '/d1/genders';
const CITATIONS = '/d1/citations';
const INTERVIEW_ALL_URL = '/d1/interviews?expand=narrator,citation,interviewer,migration,language,pronouns,genders,sexo,publishMedia,publishMedia%2Etranscriptions,publishMedia%2Estorages';

const REST = {
  getAllInterview: () => RestClient.get(
    `${BASE_URL}${INTERVIEW_ALL_URL}${TOKEN}`
  ),

  getMigrations: () => RestClient.get(
    `${BASE_URL}${MIGRATIONS}${TOKEN}`
  ),

  getSexos: () => RestClient.get(
    `${BASE_URL}${SEXOS}${TOKEN}`
  ),

  getLanguages: () => RestClient.get(
    `${BASE_URL}${LANGUAGES}${TOKEN}`
  ),

  getGenders: () => RestClient.get(
    `${BASE_URL}${GENDERS}${TOKEN}`
  ),
}

export default REST;