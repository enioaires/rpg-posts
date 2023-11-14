"use client";
import { FC, useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Post } from "@prisma/client";
import FileUploader from "./ui/fileUploader";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type PostFormProps = {
  post?: Post;
  action: "create" | "update";
};

const formSchema = z.object({
  title: z.string().min(3).max(60),
  content: z.string().min(3).max(1000),
  file: z.object({ url: z.string() }).array(),
  type: z.string(),
});

const PostForm: FC<PostFormProps> = ({ post, action }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title || "",
      content: post?.content || "",
      type: post?.type || "",
      file: [],
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    if (action === "create") {
      try {
        await axios.post("/api/post", {
          title: values.title,
          content: values.content,
          imageUrl: values.file[0].url,
          type: values.type,
        });

        router.push("/");
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios.put(`/api/post/${post?.id}`, {
          title: values.title,
          content: values.content,
          postId: post?.id,
        });

        router.push("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-9 w-full max-w-5xl"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Titulo</FormLabel>
              <FormControl>
                <Input
                  className="h-12 bg-dark-4 border-none placeholder:text-light-4 focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 custom-scrollbar"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Legenda</FormLabel>
              <FormControl>
                <Textarea
                  className="h-36 bg-dark-3 rounded-xl border-none focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3 custom-scrollbar"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Tipo do Post</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lore">Lore</SelectItem>
                    <SelectItem value="item">Item</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        {action === "create" && (
          <FormField
            control={form.control}
            name="file"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Imagem</FormLabel>
                <FormControl>
                  <FileUploader
                    value={field.value.map((image) => image.url)}
                    onChange={(url) =>
                      field.onChange([...field.value, { url }])
                    }
                    onRemove={(url) =>
                      field.onChange([
                        ...field.value.filter((current) => current.url !== url),
                      ])
                    }
                  />
                </FormControl>
              </FormItem>
            )}
          />
        )}
        <div className="flex gap-4 items-center justify-end">
          <Button
            type="button"
            className="h-12 bg-slate-900 px-5 text-white flex gap-2"
          >
            Cancel
          </Button>

          <Button
            type="submit"
            className="bg-emerald-600 hover:bg-primary-500 text-white flex gap-2 whitespace-nowrap"
          >
            {action === "create" ? "Enviar" : "Atualizar"}
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default PostForm;
