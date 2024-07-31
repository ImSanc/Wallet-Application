import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { Header } from "../components/Headers";

export function SignIn( ){
    return <div className=" bg-customBackGround  flex items-center justify-center  h-screen">
        <div className=" bg-white rounded-lg w-[80%] sm:w-[50%] lg:w-[23%] text-center p-3">
        <Header heading= {'Sign in'}/>
        <SubHeading subHeading={'Enter your information to access your account'}/>
        <InputBox label={'Email'} placeholder={'Mishra@gmail.com'} />
        <InputBox label={'Password'} placeholder={'123456'} />
        <Button buttonName={'Sign in'}/>
        <BottomWarning warning={' Don\'t have an account?'} to={'/signup'} toLabel={'Sign up'}/>
        </div>
    </div>
}