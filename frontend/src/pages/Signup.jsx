import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { Header } from "../components/Header";

export function SignUp( ){
    return <div className=" bg-customBackGround  flex items-center justify-center  h-screen">
        <div className=" bg-white rounded-lg w-[80%] sm:w-[50%] lg:w-[23%] text-center p-3">
        <Header heading= {'Sign up'}/>
        <SubHeading subHeading={'Enter your information to create an account'}/>
        <InputBox label={'First Name'} placeholder={'Sanchit'} />
        <InputBox label={'Last Name'} placeholder={'Mishra'} />
        <InputBox label={'Email'} placeholder={'Mishra@gmail.com'} />
        <InputBox label={'Password'} placeholder={'123456'} />
        <Button buttonName={'Sign up'}/>
        <BottomWarning warning={'Already have an account?'} to={'/signin'} toLabel={'Sign in'}/>
        </div>
    </div>
}