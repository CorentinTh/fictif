import { makeRequestSpotlight } from '../../src/Services/spotlight'

it('should return error 400 if empty params', async () => {
  const result = await makeRequestSpotlight(0.8)
  /*
  expect.assertions(1)
  await expect(makeRequestSpotlight()).rejects.toMatchObject(
    {
      'status': 400,
      'statusText': 'Bad Request'
    }
  )
  */
  expect(result).toEqual([])
})

it('should call spotlight api', async () => {
  const query = 'Mr. Bean is a British sitcom created by Rowan Atkinson and Richard Curtis, produced by Tiger Aspect ' +
    'and starring Atkinson as the title character. The sitcom consisted of 15 episodes that were co-written by ' +
    'Atkinson alongside Curtis and Robin Driscoll; for the pilot, it was co-written by Ben Elton. The series was ' +
    'originally broadcast on ITV, beginning with the pilot on 1 January 1990[1] and ending with The Best Bits of ' +
    'Mr. Bean 15 December 1995.'

  const result = await makeRequestSpotlight(0.8, query)

  console.log(result)
  expect(result).not.toHaveLength(0)
})

it('should call spotlight api', async () => {
  const query = 'pzkapdazd'
  const result = await makeRequestSpotlight(0.8, query)

  console.log(result)
  expect(result).toEqual([])
})
