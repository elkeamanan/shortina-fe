import * as axiosHandler from "@/lib/api";
export async function getRedirection(key: string): Promise<string> {
  try {
    const response = await axiosHandler.getRedirection({ key });
    return response.redirection;
  } catch (error) {
    return "";
  }
}

export async function storeRedirection(
  prevState: { message: string },
  formData: FormData
): Promise<{ message: string }> {
  const key = formData.get("key") as string;
  const redirection = formData.get("redirection") as string;

  try {
    await axiosHandler.storeRedirection({ key, redirection });
    return { message: "" };
  } catch (err) {
    if (err instanceof Error) {
      return { message: err.message };
    } else {
      return { message: `Unknown error ${err}` };
    }
  }
}
