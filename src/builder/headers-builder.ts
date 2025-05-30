
export default class HeadersBuilder {
    private headers: Record<string, string> = {}

    withContentType(contentType: string) {
        this.headers["Content-Type"] = contentType
      return this
    }

    withCookie(token: string){
        this.headers["Cookie"] = `token=${token}`
        return this
    }

    withAccept(accept: string){
        this.headers["Accept"] = accept
        return this
    }

    build(){
        return this.headers
    }
}