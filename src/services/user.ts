class UserApiService 
{
    baseUrl: string

    constructor( baseUrl: string )
    {
        this.baseUrl = baseUrl;
    }

    async sign(email: string, password: string): Promise<object | any>
    {
        try
        {
            const method = 'POST';
            const headers: Record<string, string> = { 'Accept':'Application/json', 'Content-Type':'Application/json'};
            const body = JSON.stringify({email, password});

            const response: Response = await fetch(this.baseUrl, {method, headers, body});
            const response_json: any = await response.json();

            return response_json;
        }
        catch(err)
        {
            console.log(err);
        }
    }


    async getProducts()
    {
        try
        {
            const method = 'GET';
            const headers: Record<string, string> = {'Accept':'Application/json', 'Content-Type':'Application/json'};
            const response: Response = await fetch(this.baseUrl, {method, headers});
            const response_json: any = await response.json();
            
            return response_json;

        }
        catch(err)
        {

            console.log(err);
        }
    }
}


export default UserApiService