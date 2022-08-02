export default function home(users) {
    return `
    ${users.map(user =>{
        return `
        <div class = "user">
        <p class = "name"> ${user.name}</p>
        <p class = "league"> ${user.league}</p>
        <input type="hidden" class="id_field" value="${user.id}">  
        </div>
        `
    })}
    `
}