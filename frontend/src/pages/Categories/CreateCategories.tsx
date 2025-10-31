
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useLoginMutation } from "@/redux/modules/auth/auth.api"; // 👈 এটা সম্ভবত পরে বদলাতে হবে
import { useNavigate } from "react-router";

// ----------------------
// ✅ Form Schema
// ----------------------
const formSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters long"),
});

function CreateCategories() {
    const [login] = useLoginMutation();
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues: {
            title: "",
        },
        resolver: zodResolver(formSchema),
    });

    // ----------------------
    // ✅ Submit Handler
    // ----------------------
    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            const res = await login(data).unwrap();
            if (res.status === "success") {
                toast.success("You are logged in successfully");
                navigate("/");
            }
        } catch (error) {
            toast.error("Login failed");
            console.error(error);
        }
    };

    // ----------------------
    // ✅ JSX Layout
    // ----------------------
    return (
        <div className="py-10 flex items-center  justify-center">
            <div className="max-w-xs w-full border-gray-500 border-1 p-5 rounded-2xl flex flex-col items-center">
                <p className="mt-4 text-xl font-semibold tracking-tight">Create Categories</p>

                <div className="my-7 w-full flex items-center justify-center overflow-hidden">
                    <Separator />
                </div>

                <Form {...form}>
                    <form className="w-full space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                        {/* Email */}



                        {/* Title */}
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>CreateCategories</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter category title" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <button
                            type="submit"
                            className="w-full py-2 px-2 text-white rounded-2xl bg-black transition-all"
                        >
                            Save Categories
                        </button>
                    </form>
                </Form>
            </div>
        </div>
    );
}

export default CreateCategories;
