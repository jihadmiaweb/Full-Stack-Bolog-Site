
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Separator } from "@/components/ui/separator";
import { useSendotpMutation } from "@/redux/modules/auth/auth.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

import { z } from "zod";

const formSchema = z.object({
    email: z.string().email(),
});

function Verify() {
    const [sendOtp] = useSendotpMutation()

    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues: {
            email: "",
        },
        resolver: zodResolver(formSchema),
    });
    const onSubmit = (data: z.infer<typeof formSchema>) => {
        const res = sendOtp(data).unwrap()
        console.log(res);
    };

    return (
        <div className="py-10 flex items-center justify-center">
            <div className="max-w-xs w-full flex flex-col items-center">

                <p className="mt-4 text-xl font-semibold tracking-tight">
                    Verify  your    OTP
                </p>

                <div className="my-7 w-full flex items-center justify-center overflow-hidden">
                    <Separator />

                </div>
                <Form {...form}>
                    <form
                        className="w-full space-y-4"
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="flex flex-col  items-center justify-center">

                                    <FormControl>
                                        <InputOTP maxLength={6} {...field} >
                                            <InputOTPGroup>
                                                <InputOTPSlot index={0} />
                                                <InputOTPSlot index={1} />
                                                <InputOTPSlot index={2} />
                                                <InputOTPSlot index={3} />
                                                <InputOTPSlot index={4} />
                                                <InputOTPSlot index={5} />
                                            </InputOTPGroup>
                                        </InputOTP>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="mt-4 w-full">
                            Verify   OTP
                        </Button>
                    </form>
                </Form>
                <div className="mt-5 space-y-5">

                    <p className="text-sm text-center">
                        Don&apos;t have an account?
                        <Link to="/sign-up" className="ml-1 underline text-muted-foreground">
                            Create account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Verify;