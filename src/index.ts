import { Hono } from 'hono'
import { getRequestListener } from '@hono/node-server'
import express from 'express'

const hono = new Hono()
hono.get('/', (c) => c.text('Hello from Hono!'))

const app = express()
app.use('/hono', getRequestListener(hono.fetch))

app.listen(3000)
