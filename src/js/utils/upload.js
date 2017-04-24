// @flow
type ImgType = 'avatar' | 'grove' | 'seed';
const URL = 'https://empress.clai.io/files/upload';

export const uploadImg = (file: Object, type: ImgType, id?:string):Promise<*> =>
    new Promise((resolve, reject) => {
        if (file.type.indexOf('image/') === 0) {
            const body = new FormData();
            body.append('file', file);
            body.append('type', type);

            if (type === 'grove') body.append('groveId', id);

            const options = {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'X-Requested-With': 'badun'
                },
                body
            };
            fetch(URL, options)
                .then(res => res.json())
                .then(res => resolve(res.id))
                .catch(err => reject(err));
        } else {
            reject('not a valid image');
        }
    })
;
