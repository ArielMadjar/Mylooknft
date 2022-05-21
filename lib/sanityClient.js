import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '48pt9c5d',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skvAYT4TNf3vEZN6R1pT502uOtAzy3KNFaQpIaspxyOcalenJGEYuC5w1hoKEqFFjbD62CrhWP6QlW2jq1rErOESFM4a13trutcSxra9T9zPtCwHyFJEhKZ8uOevobh4WO7SncZxyiPyuGOjNyQUn6eRe2b36sLRdIWaImfcfYjrkswzKPRM',
  useCdn: false,
})