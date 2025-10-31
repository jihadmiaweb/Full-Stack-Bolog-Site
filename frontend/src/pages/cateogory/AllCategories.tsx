import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useGetCategoriesQuery } from "@/redux/modules/Categories/Categories.api";
import { Link } from "react-router";

function AllCategories() {

    const { data, isLoading } = useGetCategoriesQuery(undefined);


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
                    {isLoading &&
                        <TableRow>
                            <TableCell colSpan={3}>Loading ...</TableCell>
                        </TableRow>

                    }

                    {data &&
                        data.data.map(((cat: { _id: string, title: string }, index: number) => (

                            <TableRow key={cat._id}>


                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{cat.title}</TableCell>
                                <TableCell className="text-right">
                                    <div className="inline-flex gap-2">
                                        <Button asChild className="cursor-pointer">
                                            <Link to={`/me/edit-category/${cat._id}`}>Edit</Link>
                                        </Button>
                                        <Button className="cursor-pointer">
                                            Delete
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        )))
                    }

                </TableBody>
            </Table>
        </div>
    );
}

export default AllCategories;