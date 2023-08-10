export const copyClipboard = async (
  text: string,
  onSuccess?: () => void,
  onError?: () => void
) => {
  try {
    await navigator.clipboard.writeText(text);
    onSuccess?.();
  } catch (err) {
    console.error("Failed to copy: ", err);
    onError?.();
  }
};
