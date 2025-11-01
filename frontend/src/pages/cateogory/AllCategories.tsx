import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useDeleteMutation, useGetCategoriesQuery } from "@/redux/modules/Categories/Categories.api";
import { Link } from "react-router";
import { toast } from "sonner";

function AllCategories() {
    const { data, isLoading } = useGetCategoriesQuery(undefined);
    const [deleteCategory] = useDeleteMutation();

    const handleDeleteClick = async (id: string) => {
        const isConfirm = confirm("Are you sure you want to delete this category?");
        if (!isConfirm) return;

        try {
            await deleteCategory(id).unwrap(); // ✅ unwrap() দিলে error catch ঠিকঠাক হবে
            toast.success("Category deleted successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to delete category!");
        }
    };

    return (
        <div>
            <h1 className="text-2xl text-center font-bold mb-8">All Categories</h1>

            <Table className="border max-w-screen-md mx-auto py-6">
                <TableHeader>
                    <TableRow>
                        <TableHead>CL</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {isLoading && (
                        <TableRow>
                            <TableCell colSpan={3}>Loading ...</TableCell>
                        </TableRow>
                    )}

                    {data?.data?.map((cat: { _id: string; title: string }, index: number) => (
                        <TableRow key={cat._id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{cat.title}</TableCell>
                            <TableCell className="text-right">
                                <div className="inline-flex gap-2">
                                    <Button asChild>
                                        <Link to={`/me/edit-category/${cat._id}`}>Edit</Link>
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        onClick={() => handleDeleteClick(cat._id)}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default AllCategories;
