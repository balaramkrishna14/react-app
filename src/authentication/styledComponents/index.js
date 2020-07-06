import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const SignPage = styled.div`
   ${tw`flex flex-col justify-center items-center bg-blue-100 h-screen w-screen`};
`

const SigninTitle = styled.div`
   ${tw`my-2 text-base font-bold`};
`
const SignInFrom = styled.div`
   ${tw`p-8 bg-white`};
`
const FieldsInput = styled.div`
   ${tw`flex flex-col`};
`
const UserInput = styled.input`
   ${tw`pl-2 my-2 w-48 h-10 border`};
`
const SignInButton = styled.button`
   ${tw`mb-2 w-48 h-10 rounded bg-black text-white`};
`

const WarningDiv = styled.div`
   ${tw`text-red-700 text-sm`}
`
export {
   SignPage,
   SigninTitle,
   SignInFrom,
   FieldsInput,
   UserInput,
   SignInButton,
   WarningDiv
}
