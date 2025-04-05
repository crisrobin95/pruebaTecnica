import { getAppAccessToken } from '~/server/api/twitchApi'
import { ApiResponse } from '~/types/typesPoryect'
 

 
export default defineEventHandler(async (): Promise<ApiResponse> => {
  try {
   
    const token = await getAppAccessToken()
   
   
    if (!token) {
      throw new Error('El token recibido está vacío')
    }
 
 
    return {
      status: 'success',
      tokenPreview: token.substring(0, 10) + '...'
    }
   
  } catch (_error_: unknown) {
   
    const errorMessage = _error_ instanceof Error ? _error_.message : 'Error al obtener el token'
   
    console.error('Error en endpoint test-token:', _error_)
   
    return {
      status: 'error',
      message: errorMessage
    }
  }
})