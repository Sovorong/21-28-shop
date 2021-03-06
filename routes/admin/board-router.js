const path = require('path')
const express = require('express')
const router = express.Router()
const { error } = require('../../modules/util')

router.get('/', (req, res, next) => {
  const type = req.query.type
  const boardType = req.query.boardType || 'default'
  if (type === 'create') {
    res.render('admin/board/board-form', { boardType })
  } else {
    res.render('admin/board/board-list', { boardType })
  }
})

router.get('/:id', (req, res, next) => {
  const type = req.query.type
  const boardType = req.query.boardType || 'default'
  if (type === 'update') {
    res.render('admin/board/board-form', { css: 'admin-board', boardType })
  } else {
    res.render('admin/board/board-view', { css: 'admin-board', boardType })
  }
})

router.post('/', (req, res, next) => {
  res.send('/admin/board:POST')
})

router.put('/', (req, res, next) => {
  res.send('/admin/board:PUT')
})

router.delete('/', (req, res, next) => {
  res.send('/admin/board:DELETE')
})

module.exports = { name: '/board', router }
