function reformatDate(date: string): string {
    return new Date(date.replace(/th|nd|rd|st/, "")).toLocaleDateString('fr-CA');
};