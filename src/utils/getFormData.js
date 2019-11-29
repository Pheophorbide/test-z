export function getFormData(data) {
    let formData = new FormData();
    formData.append('data', JSON.stringify(data));
    return JSON.stringify(data);
}
