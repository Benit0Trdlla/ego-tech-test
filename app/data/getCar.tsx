export const getCar = async ({ id }: { id: number }) => {
    const res = await fetch(`https://challenge.egodesign.dev/api/models/${id}`, {
        next: { revalidate: 60 } // Revalidate every 60 seconds
    });
    return res.json();
}